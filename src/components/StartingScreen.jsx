import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: max-content max-content auto max-content;

  width: 600px;
  height: 450px;
  border-radius: 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: rgba(255, 255, 255, 0.6);

  padding: 20px 50px;
`

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  /* padding-bottom: 25px; */

  & hr {
    width: 60%;
  }
`

const Rules = styled.div`
  & p {
    /* margin: 0px; */
    line-height: 1.5em;
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

const Heading = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 35px;
`

const SubHeading = styled.div`
  font-weight: 600;
`

const Centered = styled.div`
  position: relative;
  top: 40%;
  transform: translate(0%, -50%);
`

const Right = styled.div`
  text-align: right;
`

const rules = [
  "You have 3 minutes to name as many countries as you can.",
  "Each correct guess gives you a bonus 5 seconds.",
  "To enter a country use the text-box hovering over northern canada.",
  "For a hint, press the 'hint' button and click on any country to find out its capital city."
]

const StartingScreen = ({ handleClick }) => {
  return (
    <Wrapper>
      <Title>
        Countries Trivia
        <hr />
      </Title>
      <Heading>How many Countries can you name?</Heading>
      <Rules>
        <Centered>
          <SubHeading>The game is simple...</SubHeading>
          <p>
            {rules.map((rule, i) => (
              <span key={i}>
                - {rule} <br />
              </span>
            ))}
          </p>
          <Right>Good Luck!</Right>
        </Centered>
      </Rules>
      <Button>
        <button onClick={handleClick}>Start</button>
      </Button>
    </Wrapper>
  )
}

export default StartingScreen
