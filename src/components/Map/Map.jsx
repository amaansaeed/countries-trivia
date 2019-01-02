import React from "react"
import { ReactComponent as MapSVG } from "./map.svg"
import "./Map.css"

const Map = () => {
  return <MapSVG onClick={({ target: e }) => console.log(e.parentNode.id)} />
}

export default Map
