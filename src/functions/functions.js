export const checkGuess = (searchTerm, ObjToSearch) => {
  const result = ObjToSearch[searchTerm]
  return result ? true : false
}

export const formatTime = timeRemaining => {
  // Takes in a value in seconds and formats it to MM:SS
  let minutes = Math.floor(timeRemaining / 60)
  let seconds = timeRemaining % 60
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds
  const formattedTime = minutes + ":" + seconds
  return formattedTime
}

export const getRegion = region => {
  switch (region) {
    case "north america":
    case "south america":
    case "central america":
      return "americas"
    case "caribbean":
      return "caribbean"
    case "europe":
    case "british isles":
    case "iberian peninsula":
    case "be-ne-lux":
    case "scandanavia":
    case "baltic states":
    case "balkan states":
      return "europe"
    case "asia":
    case "caucasus":
    case "middle east":
      return "asia"
    case "africa":
      return "africa"
    case "oceania":
      return "oceania"
    default:
      break
  }
}

export const updateCss = (countriesGuessedArray, countries, coloursArray) => {
  let countryL = ["", "", "", "", "", ""]
  let colorL = []

  for (var i = 0; i < coloursArray.length; i++) {
    colorL[i] = ` {fill: ${coloursArray[i]} !important;} `
  }

  for (let i = 0; i < countriesGuessedArray.length; i++) {
    var countryName = countriesGuessedArray[i]
    var code = countries[countryName].code
    var color = countries[countryName].color
    var c = color - 1

    countryL[c] = `${countryL[c]}.${code}, `
  }

  // Preps the final statment
  var cssString = ""
  for (let i = 0; i < countryL.length; i++) {
    if (countryL[i].length > 0) {
      countryL[i] = countryL[i].slice(0, -2) + colorL[i]
      cssString = cssString + countryL[i]
    }
  }

  return cssString
}
