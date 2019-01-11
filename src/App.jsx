import React, { Component } from "react"

//  map
import Map from "./components/Map/Map"

//  components
import StartingScreen from "./components/StartingScreen"
import Game from "./containers/Game"

// functions
import { getCountryFromCode } from "./functions/functions"

//  data
import countries from "./data/countries.json"

class App extends Component {
  state = { start: false, selectedCountry: "" }

  startGame = () => {
    this.setState({ start: true })
  }

  selectCountry = e => {
    const countryCode = e.target.id.length === 2 ? e.target.id : e.target.parentNode.id
    const country = getCountryFromCode(countryCode, countries)
    this.setState({ selectedCountry: country })
  }

  render() {
    return (
      <div className="App">
        {this.state.start ? (
          <Game hint={this.state.selectedCountry} />
        ) : (
          <StartingScreen handleClick={this.startGame} />
        )}

        <Map handleClick={this.selectCountry} />
      </div>
    )
  }
}

export default App
