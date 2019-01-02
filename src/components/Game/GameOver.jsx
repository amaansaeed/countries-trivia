import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 450px;

  padding: 40px 30px;
  overflow: scroll;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;

  visibility: ${props => (props.show ? "visible" : "hidden")};
`

const Title = styled.div`
  text-align: center;
  padding-bottom: 15px;
  font-size: 35px;
`

const Score = styled.div`
  padding-bottom: 20px;
  text-align: center;
  font-weight: 600;
`

const Subtitle = styled.div`
  padding-bottom: 3px;
  font-weight: 500;
`

const Hr = styled.hr`
  width: 60%;
`

const Countries = styled.div`
  text-transform: capitalize;
`

const GameOver = ({ show, score, countries }) => {
  return (
    <Wrapper show={show}>
      <Title>Game Over</Title>
      <Hr />
      <Score>You scored {score} / 192</Score>
      <Subtitle>The countries you forgot were...</Subtitle>
      <Countries>{countries.join(", ")}</Countries>
    </Wrapper>
  )
}

export default GameOver
