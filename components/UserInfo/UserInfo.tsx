import React, { FC, HTMLAttributes } from "react";
import "./UserInfo.scss"

export interface UserInfoProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
}

export const UserInfo: FC<UserInfoProps> = ({
  id,
  className,
  ...props
}) => {
  className = 'user-info ' + className

  return (
    <div className={className} {...props}>
      <div className="user-info__series">
        <p>Liked series</p>
      </div>

      <hr/>

      <div className="user-info__actors">
        <p>Liked actors</p>
      </div>

      <hr/>

      <div className="user-info__friends">
        <p>Friends</p>
      </div>
    </div>
  )
}