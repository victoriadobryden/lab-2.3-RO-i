import React, { FC, HTMLAttributes } from "react";
import { User } from "../../common/intarfaces";
import Button from "../../components/Button";
import UserCard from "../../components/UserCard";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import firebaseService from "../../services/firebaseService";
import "./UserAccount.scss"

export interface UserAccountProps extends HTMLAttributes<HTMLDivElement> {
  user: User
}

export const UserAccount:FC<UserAccountProps> = ({
  user,
  className,
  ...props
}) => {
  const { signOut } = useActions()

  className = 'user-account ' + className

  return (
    <div className={className} {...props}>
      <UserCard user={user}/>
      
    </div>
  )
}