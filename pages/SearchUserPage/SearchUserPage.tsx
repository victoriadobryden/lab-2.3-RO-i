import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Filter, User } from "../../common/intarfaces";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import UserList from "../../layouts/UserList";
import "./SearchUserPage.scss"

export const SearchUserPage: FC = () => {
  const { pathname } = useLocation()
  const [filter, setFilter] = useState<Filter<User>>(u => true)
  useEffect(() => {
    if(pathname.includes('friends')) {
      const userID = pathname.split('/').slice(-1)[0]
    }
  }, [pathname])


  return (
    <div className="search-user-page">
      <UserList filters={[filter]}/>
    </div>
  )
}