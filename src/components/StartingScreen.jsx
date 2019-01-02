import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content auto max-content;

  width: 600px;
  height: 450px;
  border-radius: 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(255, 255, 255, 0.6);

  padding: 20px 40px;
`

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  padding-bottom: 25px;
`

const Rules = styled.div`
  & p {
    margin: 0px;
  }
`

const Button = styled.div`
  text-align: center;

  & button {
    background: none;
    border: 1px solid black;
    border-radius: 4px;
    width: 140px;
    height: 50px;

    font-size: 25px;

    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.6);
      color: white;
    }
  }
`

const Centered = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`

const StartingScreen = ({ handleClick }) => {
  return (
    <Wrapper>
      <Title>Countries Trivia</Title>
      <Rules>
        <Centered>
          How many Countries can you name? The game is simple...
          <ul>
            <li>You have 3 minutes to try and name all the countries of the world.</li>
            <li>
              To enter your guess simply type the name in the text-box hovering over Northern
              Canada.
            </li>
            <li>Each correct guess gives you an additonal 5 seconds.</li>
            <li>
              For a hint, press the hint button and click on a country to find out its Capital city.
            </li>
          </ul>
          <div>Good Luck!</div>
        </Centered>
      </Rules>
      <Button>
        <button onClick={handleClick}>Start</button>
      </Button>
    </Wrapper>
  )
}

export default StartingScreen
