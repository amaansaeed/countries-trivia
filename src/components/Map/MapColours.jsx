import React from "react"

const MapColours = ({ cssString }) => {
  return <React.Fragment>{React.createElement("style", {}, cssString)}</React.Fragment>
}

export default MapColours
