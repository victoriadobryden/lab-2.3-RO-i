import React, { FC, HTMLAttributes } from "react";
import "./Text.scss"

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  label: string
}

export const Text: FC<TextProps> = ({
  label,
  className,
  ...props
}) => {
  className = 'text ' + className

  return <p className={className} >  {label} </p>
}