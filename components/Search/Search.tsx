import React, { FC, InputHTMLAttributes } from 'react';
import './Search.scss';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  error?: string | null;
}

export const Search: FC<SearchProps> = ({
  name,
  error,
  placeholder,
  className,
  ...props
}) => {
  className = 'search ' + className
  className += error ? ' error' : ''

  placeholder = placeholder ? placeholder : name

  return (
    <label className="search-wrapper">
      <input
          className={className}
          id={'search__' + name}
          name={name}
          placeholder={placeholder}
          {...props}
      />
      <p className="search__error-text">{ error }</p>
    </label>
  )
}
