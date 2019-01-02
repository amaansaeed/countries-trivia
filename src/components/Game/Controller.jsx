import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 10px;

  width: 100px;
  position: fixed;
  top: 50px;
  right: 60px;
`

const Timer = styled.div`
  height: 50px;
  background: white;
  opacity: 0.8;
  border-radius: 4px;

  text-align: center;
  font-size: 35px;

  & div {
    height: max-content;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
  }
`

const Button = styled.button`
  height: 36px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid black;
  border-radius: 4px;

  font-size: 15px;
  ${props =>
    !props.pause
      ? "background: rgba(255, 255, 255, 0.6); color: black;"
      : "background: rgba(0, 0, 0, 0.6); color: white;"}
`

const Controller = ({ time, pause, handleClick }) => {
  return (
    <Wrapper>
      <Timer>
        <div>{time}</div>
      </Timer>
      <Button pause={pause} name="pause" onClick={handleClick}>
        {pause ? "Pause" : "Resume"}
      </Button>
      <Button name="hint" onClick={handleClick}>
        Hint
      </Button>
      <Button name="quit" onClick={handleClick}>
        Give Up
      </Button>
    </Wrapper>
  )
}

export default Controller
