import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 350px;

  padding: 20px;
  overflow: scroll;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  visibility: ${props => (props.show ? "visible" : "hidden")};
`

const Title = styled.div`
  text-align: center;
  padding-bottom: 20px;
`

const SubTitle = styled.div`
  padding-bottom: 20px;
`

const Hr = styled.hr`
  width: 60%;
`

const Countries = styled.div`
  text-transform: capitalize;
`

const GameOver = ({ show, countries }) => {
  return (
    <Wrapper show={show}>
      <Title>Game Over</Title>
      <Hr />
      <SubTitle>You forgot a few...</SubTitle>
      <Countries>{countries.join(", ")}</Countries>
    </Wrapper>
  )
}

export default GameOver
