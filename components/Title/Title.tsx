import React, { FC, HTMLAttributes } from "react";
import "./Title.scss"

export interface TitleProps extends HTMLAttributes<HTMLParagraphElement> {
  label: string
}

export const Title: FC<TitleProps> = ({
  label,
  className,
  ...props
}) => {
  className = 'title ' + className

  return <p className={className} >  {label} </p>
}