export class User {
  id: string
  name: string
  imageURL: string | null
  serialIDs: string[]
  actorIDs: string[]
  friendIDs: string[]
  news: {userID: number, serialID: number}[]

  constructor(
    id: string, 
    name: string,
    imageURL = null,
    serialIDs = [],
    actorIDs = [],
    friendIDs = [],
    news = []
    ) {
    this.id = id
    this.name = name
    this.imageURL = imageURL
    this.serialIDs = serialIDs
    this.actorIDs = actorIDs
    this.friendIDs = friendIDs
    this.news = news
  }
}