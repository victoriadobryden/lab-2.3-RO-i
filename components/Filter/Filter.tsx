import React, { FC, HTMLAttributes, useCallback, useState } from "react";
import "./Filter.scss"

export interface FilterProps extends HTMLAttributes<HTMLDivElement> {
  by: string[]
  selected: string[]
  setSelected: (s: string[]) => void
}

export const Filter: FC<FilterProps> = ({
  by,
  selected,
  setSelected,
  className,
  ...props
}) => {
  const handleClick = useCallback((e: any) => {
    const text = e.target.innerText

    selected.includes(text) ?
        setSelected(selected.filter(i => i !== text)) :
        setSelected([...selected, text])
  }, [selected])

  const components = by.map(e => {
    const className = selected.includes(e) ?
      'filter__item filter__item_selected' : 'filter__item'

    return (
      <div 
        className={className}
        onClick={handleClick}>
        <span>{ e }</span>
      </div>
    )
  })

  className = 'filter ' + className

  return (
    <div className={className} {...props}>
      {components}
    </div>
  )
}