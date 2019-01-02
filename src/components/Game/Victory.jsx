import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 80px;

  padding: 0px 30px;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  visibility: ${props => (props.show ? "visible" : "hidden")};
`

const Title = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  font-size: 25px;
`

const Victory = ({ show }) => {
  return (
    <Wrapper show={show}>
      <Title>Congratulations, you won! ...nerd</Title>
    </Wrapper>
  )
}

export default Victory
