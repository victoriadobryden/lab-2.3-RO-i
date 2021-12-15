import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get, child, update, remove, onValue } from "firebase/database"
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth"
import { Filter, User } from "../common/intarfaces"

const app = initializeApp({
  apiKey: "AIzaSyBUMloGU8stnSbFWe38XJXHj_Eqz-dzRJ8",
  authDomain: "movie-tracker-ce0ff.firebaseapp.com",
  projectId: "movie-tracker-ce0ff",
  messagingSenderId: "1068318498783",
  appId: "1:1068318498783:web:342f903d978eed52acae6a",
  measurementId: "G-JCTS9HDTG9",
  databaseURL: 'https://movie-tracker-ce0ff-default-rtdb.europe-west1.firebasedatabase.app'
})

const auth = getAuth(app)
const db = getDatabase()

const signUp = async(
  name: string, 
  email: string, 
  password: string, 
  onUpdate: (user: User) => void
  ) => {
  const authRes = await createUserWithEmailAndPassword(auth, email, password)
  const id = authRes.user.uid
  const user = new User(id, name)
  
  localStorage.setItem('user', JSON.stringify(user))
  await set(ref(db, 'Users/' + id), user)
  
  onValue(ref(db, 'Users/' + id), snap => {
    onUpdate(snap.val() as User)
  })
}

const signIn = async(
  email: string, 
  password: string,
  onUpdate: (user: User) => void
  ) => {
  const authRes = await signInWithEmailAndPassword(auth, email, password)
  const id = authRes.user.uid
  const user = await get(child(ref(db), 'Users/' + id))

  localStorage.setItem('user', JSON.stringify(user))
  if (!user.exists()) throw Error("User don't esists")

  onValue(ref(db, 'Users/' + id), snap => {
    onUpdate(snap.val() as User)
  })
}

const addSerial = (user: User, serialID: string) => {
  const serialIDs = [...(user.serialIDs ?? []), serialID]
  return update(ref(db, "Users/" + user.id), {serialIDs})
}

const removeSerial = (user: User, serialID: string) => {
  const serialIDs = user.serialIDs.filter(el => el !== serialID)
  return update(ref(db, "Users/" + user.id), {serialIDs})
}

const addFriend = (me: User, userID: string) => {
  const friendIDs = [...(me.friendIDs ?? []), userID]
  return update(ref(db, "Users/" + me.id), {friendIDs})
}

const removeFriend = (me: User, userId: string) => {
  const friendIDs = me.friendIDs.filter(f => f !== userId)
  return update(ref(db, "Users/" + me.id), {friendIDs})
}

const searchUsers = async(...filters: Filter<User>[]) => {
  const usersObj = await (await get(child(ref(db), 'Users/'))).val()
  const userArr = []

  for(let key in usersObj) {
    const user = usersObj[key]
    if (filters.every( f => f(user) )) userArr.push(user)
    if (userArr.length >= 40) break
  }

  return userArr as User[]
}

const signOut = () => {
  auth.signOut()
  localStorage.removeItem('user')
}
const onAuthChanged = (func: any) => onAuthStateChanged(auth, func)

const firebaseService = {
  signUp,
  signIn,
  signOut,
  onAuthChanged,
  addSerial,
  removeSerial,
  searchUsers,
  addFriend,
  removeFriend,
}

export default firebaseService