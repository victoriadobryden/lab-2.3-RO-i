import React, { FC } from "react";
import SeriesList from "../../layouts/SeriesList";
import "./SearchSeriesPage.scss"

export const SearchSeriesPage: FC = () => {

  return ( 
    <div className="search-page">
      <SeriesList />
    </div> 
  )
}