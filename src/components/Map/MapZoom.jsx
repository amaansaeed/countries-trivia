import React from "react"

const MapZoom = ({ zoom }) => {
  let size = (zoom * 100).toString()
  const zoomString = `#world-map { width: ${size}%; height: ${size}%; }`
  return <React.Fragment>{React.createElement("style", {}, zoomString)}</React.Fragment>
}

export default MapZoom
