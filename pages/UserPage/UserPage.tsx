import React, { FC, useEffect } from "react";
import { useLocation } from "react-router";
import { User } from "../../common/intarfaces";
import { useActions, useTSelector } from "../../hooks";
import UserAccount from "../../layouts/UserAccount";
import "./UserPage.scss"

export const UserPage: FC = () => {
  const { pathname } = useLocation()
  const { searchUsers } = useActions()
  const { users, loading } = useTSelector(s => s.search)

  const { user } = useTSelector(s => s.user)
  console.log(user)
  
  useEffect(() => {
    console.log('useeffect')
    const userID = pathname.split('/').slice(-1)[0]
    console.log('lol' + userID)
    searchUsers(u => u.id === userID)
  }, [pathname])

  console.log(loading)

  return (
    <div className="user-page">
      {
        loading ?
          <p>loading</p> :
          <UserAccount user={users[0]}/>
      }
    </div>
  )
}