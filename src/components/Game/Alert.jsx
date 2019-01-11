import React from "react"
import styled from "styled-components"

//  styled component
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 300px;
  border-radius: 15px;
  background: rgba(250, 250, 250, 0.6);

  visibility: ${props => (props.show ? "visibile" : "hidden")};
`

const Content = styled.div`
  position: relative;
  width: max-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 50px;
`

const Alert = ({ show, message }) => {
  return (
    <Wrapper show={show}>
      <Content>{message}</Content>
    </Wrapper>
  )
}

export default Alert
