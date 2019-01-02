import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;

  width: 400px;
  height: 300px;
  border-radius: 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: lightcoral;

  padding: 20px;
`

const Title = styled.div`
  font-size: 20px;
`

const Rules = styled.div`
  & p {
    margin: 0px;
  }
`

const Button = styled.div`
  text-align: center;
`

const StartingScreen = ({ handleClick }) => {
  return (
    <Wrapper>
      <Title>How many countries can you name?</Title>
      <Rules>
        <p>The game is simple...</p>
        <p>You have 3 minutes to try and name all the countries of the world.</p>
        <p>
          To enter your guess simply type the name in the text-box hovering over Northern Canada
        </p>
        <p>Each correct guess gives you an additonal 10 seconds.</p>
        <p>Good Luck!</p>
      </Rules>
      <Button>
        <button onClick={handleClick}>Start!</button>
      </Button>
    </Wrapper>
  )
}

export default StartingScreen
