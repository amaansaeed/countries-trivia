import React, { Component } from "react"

//  components
import SearchBar from "../components/Game/SearchBar"
import Scoreboard from "../components/Game/Scoreboard"
import Zoom from "../components/Game/Zoom"
import Controller from "../components/Game/Controller"
import Hint from "../components/Game/Hint"
import GameOver from "../components/Game/GameOver"
import MapColours from "../components/Map/MapColours"
import MapZoom from "../components/Map/MapZoom"

//  functions
import {
  checkGuess,
  getCountryFromCode,
  formatTime,
  getRegion,
  colourGuessed,
  colourAll
} from "../functions/functions"

//  data
import countries from "../data/countries.json"
import colours from "../data/colours.json"
import Victory from "../components/Game/Victory"

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
    gameOver: false,
    victory: false,
    countriesGuessed: [],
    countriesRemaining: [],
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

  runGame = () => {
    if (this.state.pause) {
      return
    }

    if (this.state.timeRemaining < 1) {
      clearInterval(this.game)
      this.handleGameOver()
      return
    }

    const { timeRemaining } = this.state
    this.setState({ timeRemaining: timeRemaining - 1 })
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

    this.setState(
      {
        countriesGuessed: countriesGuessed,
        scores: scores,
        timeRemaining: timeRemaining,
        currentSearch: "",
        showHint: false,
        cssString: colourGuessed(countriesGuessed, countries, colours)
      },
      () => {
        const { countriesGuessed } = this.state
        if (countriesGuessed.length === 192) {
          this.setState({ victory: true, timeRemaining: 0 })
        }
      }
    )
  }

  handleGameOver = () => {
    let countriesRemaining = []
    for (let country in countries) {
      if (!this.state.countriesGuessed.includes(country)) {
        countriesRemaining.push(country)
      }
    }

    this.setState({
      gameOver: true,
      countriesRemaining: countriesRemaining,
      cssString: colourAll(countries, colours)
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

    if (input.name === "hint" && !this.state.pause) {
      this.setState({ showHint: !this.state.showHint })
    }

    if (input.name === "quit") {
      this.setState({ timeRemaining: 0 })
    }

    if (input.name === "pause") {
      this.setState({ pause: !this.state.pause, showHint: false })
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
        <MapColours cssString={this.state.cssString} />

        {this.state.victory || this.state.gameOver ? null : (
          <React.Fragment>
            <MapZoom zoom={this.state.zoom} />

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
              showHint={this.state.showHint}
              handleClick={this.handleControllerClick}
            />

            <Hint
              show={this.state.showHint}
              hint={getCountryFromCode(this.props.selectedCountry, countries)}
            />
          </React.Fragment>
        )}

        <Victory show={this.state.victory} />

        {this.state.victory ? null : (
          <GameOver
            show={this.state.gameOver}
            score={this.state.countriesGuessed.length}
            countries={this.state.countriesRemaining}
          />
        )}
      </React.Fragment>
    )
  }

  componentDidMount = () => {
    this.game = setInterval(() => {
      this.runGame()
    }, 1 * 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.game)
  }
}

export default Game
