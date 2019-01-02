import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  width: 250px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;

  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
`

const Centered = styled.div`
  padding: 0px 10px;
  position: fixed;
  top: 50%;
  transform: translate(0, -50%);
`

const Hint = ({ hint }) => {
  return (
    <Wrapper>
      <Centered>Hint: {hint}</Centered>
    </Wrapper>
  )
}

export default Hint
