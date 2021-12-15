import React, { FC, HTMLAttributes } from "react";
import { useHistory } from "react-router";
import { Serial, User } from "../../common/intarfaces";
import Button from "../../components/Button";
import { useActions, useTSelector } from "../../hooks";
import "./SerialLayout.scss"

export interface SerialLayoutProps extends HTMLAttributes<HTMLDivElement> {
  serial: Serial | null
}

export const SerialLayout: FC<SerialLayoutProps> = ({
  serial,
  className,
  ...props
}) => {
  const { user: me } = useTSelector(s => s.user)
  const { addSerial, removeSerial } = useActions()
  const history = useHistory()

  const isLiked = me?.serialIDs?.includes(serial?.id as string) || false
  const handleRemove = () => removeSerial(me as User, serial?.id as string)
  const handleAdd = () => {
    !!me ? 
    removeSerial(me as User, serial?.id as string) :
    history.push('/sign-in')
  }

  className = 'serial-layout ' + className

  return (
    <>
      <img 
        className="serial-layout__background" 
        src={serial?.image.original} 
        alt={serial?.name} />
    
    <div className={className}>
      <div className="serial-layout__image-block">
        <img src={serial?.image.original} />
        <div className="serial-layout__buttons">
          {isLiked ? 
            <Button label="unlike" onClick={handleRemove} /> :
            <Button label="like" onClick={handleAdd}/>
          }
          <Button label="share" />
        </div>
      </div>

      <div className="serial-layout__text-block">
        <h2 className="serial-layout__title">
          {serial?.name}
        </h2>
        <p className="serial-layout__genres">
          {serial?.genres.join(', ')}
        </p>
        <p dangerouslySetInnerHTML={{__html: serial?.summary || ''}} />
      </div>
    </div>
    </>
  )
}