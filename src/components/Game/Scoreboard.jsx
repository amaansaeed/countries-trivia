import React from "react"
import styled from "styled-components"

//  styled-components
const Wrapper = styled.div`
  width: 200px;
  /* height: 200px; */
  position: fixed;
  bottom: 50px;
  left: 60px;
  background: white;
  border-radius: 4px;
  opacity: 0.8;
  padding: 10px;
  font-size: 1em;
  line-height: 1.5em;

  & hr {
    width: 80%;
  }
`

const Heading = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
`

const Region = styled.div``
const Score = styled.div`
  width: 55px;
  display: grid;
  grid-template-columns: 2fr max-content 3fr;

  & div {
    width: max-content;
    margin: auto;
    text-align: center;
  }
`

const Scoreboard = ({ americas, caribbean, europe, asia, africa, oceania }) => {
  const total = americas + caribbean + europe + asia + africa + oceania
  return (
    <Wrapper>
      <Heading>Score Board</Heading>
      <Row>
        <Region>Americas:</Region>
        <Score>
          <div>{americas}</div>
          <div>/</div>
          <div>22</div>
        </Score>
      </Row>
      <Row>
        <Region>Caribbean:</Region>
        <Score>
          <div>{caribbean}</div>
          <div>/</div>
          <div>12</div>
        </Score>
      </Row>
      <Row>
        <Region>Europe:</Region>
        <Score>
          <div>{europe}</div>
          <div>/</div>
          <div>47</div>
        </Score>
      </Row>
      <Row>
        <Region>Asia:</Region>
        <Score>
          <div>{asia}</div>
          <div>/</div>
          <div>47</div>
        </Score>
      </Row>
      <Row>
        <Region>Africa:</Region>
        <Score>
          <div>{africa}</div>
          <div>/</div>
          <div>55</div>
        </Score>
      </Row>
      <Row>
        <Region>Oceania:</Region>
        <Score>
          <div>{oceania}</div>
          <div>/</div>
          <div>10</div>
        </Score>
      </Row>
      <hr />
      <Row>
        <Region>Total:</Region>
        <Score>
          <div>{total}</div>
          <div>/</div>
          <div>192</div>
        </Score>
      </Row>
    </Wrapper>
  )
}

export default Scoreboard
