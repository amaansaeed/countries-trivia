import React from "react"
import { ReactComponent as MapSVG } from "./map.svg"
import "./Map.css"

const Map = ({ handleClick }) => {
  return <MapSVG onClick={handleClick} />
}

export default Map
