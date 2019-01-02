import React, { Component } from "react"

//  components
import SearchBar from "./Game/SearchBar"
import Scoreboard from "./Game/Scoreboard"
import Zoom from "./Game/Zoom"
import Controller from "./Game/Controller"
import Hint from "./Game/Hint"
import MapColours from "./Map/MapColours"

//  functions
import { checkGuess, formatTime, getRegion, updateCss } from "../functions/functions"

//  data
import countries from "../data/countries.json"
import colours from "../data/colours.json"

class Game extends Component {
  maxZoom = 5
  timeRemaining = 3 * 60 // In seconds
  correctAnswerBonusTime = 5 // In seconds

  state = {
    currentSearch: "",
    timeRemaining: this.timeRemaining,
    zoom: 1,
    showHint: false,
    pause: false,
    countriesGuessed: [],
    scores: {
      americas: 0,
      caribbean: 0,
      europe: 0,
      asia: 0,
      africa: 0,
      oceania: 0
    },
    cssString: ""

    //  var mode = "";      // can be set to 'game' or 'explore'
    //  selectedCountry;
  }

  handleCorrectGuess = guess => {
    let { countriesGuessed } = this.state
    countriesGuessed.push(guess)

    const subRegion = countries[guess].region
    const region = getRegion(subRegion)
    let { scores } = this.state
    scores[region] = scores[region] + 1

    let { timeRemaining } = this.state
    timeRemaining = timeRemaining + this.correctAnswerBonusTime

    this.setState({
      countriesGuessed: countriesGuessed,
      scores: scores,
      timeRemaining: timeRemaining,
      currentSearch: "",
      showHint: false,
      cssString: updateCss(countriesGuessed, countries, colours)
    })
  }

  handleSearch = ({ currentTarget: input }) => {
    if (this.state.pause) {
      return
    }
    this.setState({ currentSearch: input.value }, () => {
      let search = this.state.currentSearch
      search = search
        .trim()
        .toLowerCase()
        .replace("&", "and")
      const result = checkGuess(search, countries)

      if (result) {
        this.handleCorrectGuess(search)
      }
    })
  }

  handleControllerClick = ({ currentTarget: input }) => {
    console.log(input.name)

    if (input.name === "hint") {
      this.setState({ showHint: !this.state.showHint })
    }

    if (input.name === "quit") {
      this.setState({ timeRemaining: 0 })
    }

    if (input.name === "pause") {
      this.setState({ pause: !this.state.pause })
    }

    if (input.name === "zoom-in") {
      if (this.state.zoom < this.maxZoom) {
        this.setState({ zoom: this.state.zoom + 0.5 })
      }
    }

    if (input.name === "zoom-out") {
      if (this.state.zoom > 1) {
        this.setState({ zoom: this.state.zoom - 0.5 })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.show ? null : (
          <React.Fragment>
            <MapColours cssString={this.state.cssString} />
            <SearchBar
              pause={this.state.pause}
              value={this.state.currentSearch}
              handleChange={this.handleSearch}
            />
            <Scoreboard {...this.state.scores} />
            <Zoom handleClick={this.handleControllerClick} />
            <Controller
              time={formatTime(this.state.timeRemaining)}
              pause={this.state.pause}
              handleClick={this.handleControllerClick}
            />
            {!this.state.showHint ? null : <Hint />}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }

  componentDidMount = () => {}
}

export default Game
