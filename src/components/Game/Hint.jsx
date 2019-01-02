import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  width: 320px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;

  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);

  visibility: ${props => (props.show ? "visible" : "hidden")};
`

const Centered = styled.div`
  padding: 0px 10px;
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);

  text-transform: capitalize;
`

const Hint = ({ show, hint }) => {
  return (
    <Wrapper show={show}>
      <Centered>Capital: {hint}</Centered>
    </Wrapper>
  )
}

export default Hint
