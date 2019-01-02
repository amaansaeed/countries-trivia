import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  position: fixed;
  bottom: 50px;
  right: 60px;

  width: 100px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px;

  & div {
    width: max-content;
    margin: auto;
  }
`

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid black;
  background: white;
  opacity: 0.8;
  cursor: pointer;

  font-size: 20px;
`

const Zoom = ({ handleClick }) => {
  return (
    <Wrapper>
      <div>
        <Button name="zoom-in" onClick={handleClick}>
          +
        </Button>
      </div>
      <div>
        <Button name="zoom-out" onClick={handleClick}>
          -
        </Button>
      </div>
    </Wrapper>
  )
}

export default Zoom
