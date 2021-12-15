import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import { useTSelector } from "../../hooks";
import { useActions } from "../../hooks/useActions";
import SerialLayout from "../../layouts/SerialLayout";
import tvmazeService from "../../services/tvmazeService";

export const SerialPage: FC = () => {
  const { serial, loading } = useTSelector(state => state.serial)
  const { getSerialbyId } = useActions()
  const { pathname } = useLocation()
  useEffect(() => {
    const id = pathname.split('/').slice(-1)[0]
    getSerialbyId(parseInt(id))
  }, [pathname])

  return (
    <div className="serial-page">
      {loading ?
        <p>loading...</p> :
        <SerialLayout serial={serial}/>}
    </div>
  )
}