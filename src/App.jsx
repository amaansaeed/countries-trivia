import React, { Component } from "react"

//  map
import Map from "./components/Map/Map"

//  components
import StartingScreen from "./components/StartingScreen"
import Game from "./containers/Game"

class App extends Component {
  state = { start: false, selectedCountry: "" }

  startGame = () => {
    this.setState({ start: true })
  }

  selectCountry = ({ target: input }) => {
    this.setState({ selectedCountry: input.parentNode.id })
  }

  render() {
    return (
      <div className="App">
        {this.state.start ? (
          <Game selectedCountry={this.state.selectedCountry} />
        ) : (
          <StartingScreen handleClick={this.startGame} />
        )}

        <Map handleClick={this.selectCountry} />
      </div>
    )
  }
}

export default App
