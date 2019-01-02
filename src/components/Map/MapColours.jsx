import React from "react"

const MapColours = props => {
  return <React.Fragment>{React.createElement("style", {}, props.cssString)}</React.Fragment>
}

export default MapColours
