import React, { FC, HTMLAttributes, useState } from "react";
import * as Icons from "react-bootstrap-icons"
import { useHistory } from "react-router";
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import Search from "../Search";
import "./MainBar.scss"
import { useTSelector } from "../../hooks";

export interface MainBarProps extends HTMLAttributes<HTMLDivElement> {}

export const MainBar: FC<MainBarProps> = ({
  children, 
  className,
  ...props
}) => {
  const history = useHistory()
  const { user } = useTSelector(s => s.user)

  const onNewspaperClick = () => history.push('/news')
  const onSeriesClick = () => history.push('/series')
  const onUsersClick = () => history.push('/users')
  const onHomeClick = () => history.push('/users/' + user?.id)
  const onSignInClick = () => history.push('/sign-in')


  className = "main-bar d-flex justify-content-evenly align-items-center " + className

  return (
    <div className={className} {...props}>
      {!!user ? 
      <Icons.Newspaper 
        color="white" 
        size={32}
        onClick={onNewspaperClick} /> : null}
      <Icons.Search color="white"
        size={32}
        onClick={onSeriesClick} />
      <Icons.GenderMale color="white"
        size={32}
        onClick={onUsersClick} />
      {!!user ? 
      <Icons.House color="white"
        size={32}
        onClick={onHomeClick} /> : 
      <Icons.Signpost color="white"
        size={32}
        onClick={onSignInClick} />}
    </div>
  )
}