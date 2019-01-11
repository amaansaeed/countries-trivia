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

// const Score = styled.div`
//   padding-bottom: 20px;
//   text-align: center;
//   font-weight: 600;
// `

const Score = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 35px;
`

const SubHeading = styled.div`
  padding-bottom: 3px;
  font-weight: 500;
`

const Hr = styled.hr`
  width: 60%;
`

const Countries = styled.div`
  padding-top: 10px;
  text-transform: capitalize;
  font-size: 13px;
  line-height: 1.7;
`

const Button = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;

  & > div {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    background: none;
    border: 1px solid black;
    border-radius: 4px;
    width: 140px;
    height: 50px;

    font-size: 20px;

    cursor: pointer;

    & > div {
      height: max-content;
      width: max-content;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.6);
      color: white;
    }
  }
`

const GameOver = ({ show, score, countries }) => {
  return (
    <Wrapper show={show}>
      <Title>Game Over</Title>
      <Hr />
      <Score>You scored {score} / 192</Score>
      <SubHeading>The countries you forgot were...</SubHeading>
      <Countries>{countries.join(", ")}</Countries>
      <Button>
        <div onClick={() => window.location.replace("/")}>
          <div>Try Again?</div>
        </div>
      </Button>
    </Wrapper>
  )
}

export default GameOver
