import React, { Component } from "react"

//  map
import Map from "./components/Map/Map"

//  components
import StartingScreen from "./components/StartingScreen"
import Game from "./components/Game"

class App extends Component {
  state = { start: false }

  startGame = () => {
    this.setState({ start: true })
  }

  render() {
    return (
      <div className="App">
        {this.state.start ? null : <StartingScreen handleClick={this.startGame} />}
        <Game show={this.state.start} />

        <Map />
      </div>
    )
  }
}

export default App
