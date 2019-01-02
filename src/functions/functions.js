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

export const colourGuessed = (countriesGuessedArray, countries, coloursArray) => {
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

export const colourAll = (countriesList, coloursArray) => {
  let cssColor1 = "",
    cssColor2 = "",
    cssColor3 = "",
    cssColor4 = "",
    cssColor5 = "",
    cssColor6 = ""

  let cl1 = " {fill: " + coloursArray[0] + " !important;} ",
    cl2 = " {fill: " + coloursArray[1] + " !important;} ",
    cl3 = " {fill: " + coloursArray[2] + " !important;} ",
    cl4 = " {fill: " + coloursArray[3] + " !important;} ",
    cl5 = " {fill: " + coloursArray[4] + " !important;} ",
    cl6 = " {fill: " + coloursArray[5] + " !important;} "

  for (let country in countriesList) {
    let code = countriesList[country].code
    let color = countriesList[country].color
    switch (color) {
      case 1:
        cssColor1 = cssColor1 + "." + code + ", "
        break
      case 2:
        cssColor2 = cssColor2 + "." + code + ", "
        break
      case 3:
        cssColor3 = cssColor3 + "." + code + ", "
        break
      case 4:
        cssColor4 = cssColor4 + "." + code + ", "
        break
      case 5:
        cssColor5 = cssColor5 + "." + code + ", "
        break
      case 6:
        cssColor6 = cssColor6 + "." + code + ", "
        break
      default:
        break
    }
  }
  var updateColor1 = cssColor1.slice(0, -2) + cl1
  var updateColor2 = cssColor2.slice(0, -2) + cl2
  var updateColor3 = cssColor3.slice(0, -2) + cl3
  var updateColor4 = cssColor4.slice(0, -2) + cl4
  var updateColor5 = cssColor5.slice(0, -2) + cl5
  var updateColor6 = cssColor6.slice(0, -2) + cl6

  var updateColor =
    updateColor1 + updateColor2 + updateColor3 + updateColor4 + updateColor5 + updateColor6

  return updateColor
}

export const getCountryFromCode = (code, countryList) => {
  for (let c in countryList) {
    if (countryList[c].code === code) {
      return countryList[c].capital
    }
  }
}
