import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import { Filter, User } from "../../common/intarfaces";
import Search from "../../components/Search";
import UserCard from "../../components/UserCard";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import { nameFilter } from "../../tools/Filters";
import "./UserList.scss"

export interface UserListProps extends HTMLAttributes<HTMLDivElement> {
  filters?: Filter<User>[]
}

export const UserList: FC<UserListProps> = ({
  filters = [],
  className,
  ...props
}) => {
  const { users } = useTSelector(s => s.search)
  const { searchUsers } = useActions()
  useEffect(() => {
    searchUsers(...filters)
  }, [])

  const handleChange = (e: any) => {
    const name: string = e.target.value
    searchUsers(nameFilter(name), ...filters)
  }

  className = 'user-list ' + className

  return (
    <div className={className} {...props}>
      <Search name="user-searche" onChange={handleChange} />

      {users.map(u => (
        <UserCard user={u} />
      ))}
    </div>
  )
}