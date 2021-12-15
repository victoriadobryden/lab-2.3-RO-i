import React, { FC, HTMLAttributes, useEffect } from "react";
import { useHistory } from "react-router";
import { User } from "../../common/intarfaces";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import Button from "../Button";
import "./UserCard.scss"

export interface UserCardPrpos extends HTMLAttributes<HTMLDivElement> {
  user: User | null
}

export const UserCard: FC<UserCardPrpos> = ({
  user,
  className,
  ...props
}) => {
  const { user: me } = useTSelector(state => state.user)
  const { addFriend, removeFriend, signOut } = useActions()
  const history = useHistory()

  const { id, name, imageURL } = user as User
  const isFriend = me?.friendIDs?.includes(id) ?? false
  const isMe = me?.id === user?.id

  const handleClick = (e: any) => {
    history.push('/users/' + id)
  }
  const handleFriend = (e: any) => {
    e.stopPropagation()
    if(!me) history.push('/sign-in')

    if(me !== null && user !== null) isFriend ?
      removeFriend(me, user.id) :
      addFriend(me, user.id)
  }
  const handleSignOut = () => {
    signOut()
    history.push('/sign-in')
  }

  className = 'user-card ' + className

  return (
    <div 
      className={className} 
      onClick={handleClick}
      {...props}>
      <img src={imageURL ?? 'https://m.poisk.vid.ru/img/icons/no_avatar.jpg'} alt={name} />
      <h6>{name}</h6>
      {isMe ?
      <Button 
        className="user-card__btn" 
        label="SIGN OUT"
        onClick={handleSignOut} /> :
      <Button 
        className="user-card__btn" 
        label={isFriend ? 'unsubscribe' : 'subscribe'}
        onClick={handleFriend} /> } 
    </div>
  )
}