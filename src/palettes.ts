import {
    blue,
    blueGrey,
    blueVivid,
    coolGrey,
    cyan,
    cyanVivid,
    green,
    greenVivid,
    grey,
    indigo,
    lightBlue,
    lightBlueVivid,
    limeGreen,
    magenta,
    magentaVivid,
    orange,
    orangeVivid,
    pink,
    pinkVivid,
    purple,
    purpleVivid,
    red,
    redVivid,
    teal,
    tealVivid,
    warmGrey,
    yellow,
    yellowVivid
} from './colors'

export const paletteOne = {
    primary: {...cyan.hsl},
    neutral: {...blueGrey.hsl},
    support: {...indigo.hsl, pink: pink.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteOneHex = {
    primary: {...cyan.hex},
    neutral: {...blueGrey.hex},
    support: {...indigo.hex, pink: pink.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteTwo = {
    primary: {...blue.hsl, 'yellow-vivid': yellowVivid.hsl},
    neutral: {...blueGrey.hsl},
    support: {...cyan.hsl, red: red.hsl}
}

export const paletteTwoHex = {
    primary: {...blue.hex, 'yellow-vivid': yellowVivid.hex},
    neutral: {...blueGrey.hex},
    support: {...cyan.hex, red: red.hex}
}

export const paletteThree = {
    primary: {...purple.hsl, teal: teal.hsl},
    neutral: {...blueGrey.hsl},
    support: {...lightBlueVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl}
}

export const paletteThreeHex = {
    primary: {...purple.hex, teal: teal.hex},
    neutral: {...blueGrey.hex},
    support: {...lightBlueVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex}
}

export const paletteFour = {
    primary: {...teal.hsl},
    neutral: {...blueGrey.hsl},
    support: {...blue.hsl, purple: purple.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteFourHex = {
    primary: {...teal.hex},
    neutral: {...blueGrey.hex},
    support: {...blue.hex, purple: purple.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteFive = {
    primary: {...blueGrey.hsl},
    neutral: {...blueGrey.hsl},
    support: {...lightBlueVivid.hsl, cyan: cyan.hsl, 'pink-vivid': pinkVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl, teal: teal.hsl}
}

export const paletteFiveHex = {
    primary: {...blueGrey.hex},
    neutral: {...blueGrey.hex},
    support: {...lightBlueVivid.hex, cyan: cyan.hex, 'pink-vivid': pinkVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex, teal: teal.hex}
}

export const paletteSix = {
    primary: {...red.hsl, yellow: yellow.hsl},
    neutral: {...warmGrey.hsl},
    support: {...cyan.hsl, 'lime-green': limeGreen.hsl}
}

export const paletteSixHex = {
    primary: {...red.hex, yellow: yellow.hex},
    neutral: {...warmGrey.hex},
    support: {...cyan.hex, 'lime-green': limeGreen.hex}
}

export const paletteSeven = {
    primary: {...cyan.hsl},
    neutral: {...warmGrey.hsl},
    support: {...blue.hsl, red: red.hsl, yellow: yellow.hsl, teal: teal.hsl}
}

export const paletteSevenHex = {
    primary: {...cyan.hex},
    neutral: {...warmGrey.hex},
    support: {...blue.hex, red: red.hex, yellow: yellow.hex, teal: teal.hex}
}

export const paletteEight = {
    primary: {...blueVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...cyan.hsl, 'orange-vivid': orangeVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl}
}

export const paletteEightHex = {
    primary: {...blueVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...cyan.hex, 'orange-vivid': orangeVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex}
}

export const paletteNine = {
    primary: {...lightBlueVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...pinkVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl, teal: teal.hsl}
}

export const paletteNineHex = {
    primary: {...lightBlueVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...pinkVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex, teal: teal.hex}
}

export const paletteTen = {
    primary: {...indigo.hsl},
    neutral: {...coolGrey.hsl},
    support: {...lightBlueVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl, teal: teal.hsl}
}

export const paletteTenHex = {
    primary: {...indigo.hex},
    neutral: {...coolGrey.hex},
    support: {...lightBlueVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex, teal: teal.hex}
}

export const paletteEleven = {
    primary: {...pinkVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...purpleVivid.hsl, 'cyan-vivid': cyanVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl}
}

export const paletteElevenHex = {
    primary: {...pinkVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...purpleVivid.hex, 'cyan-vivid': cyanVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex}
}

export const paletteTwelve = {
    primary: {...green.hsl},
    neutral: {...grey.hsl},
    support: {...purple.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwelveHex = {
    primary: {...green.hex},
    neutral: {...grey.hex},
    support: {...purple.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteThirteen = {
    primary: {...yellowVivid.hsl, 'light-blue-vivid': lightBlueVivid.hsl},
    neutral: {...grey.hsl},
    support: {...redVivid.hsl, teal: teal.hsl}
}

export const paletteThirteenHex = {
    primary: {...yellowVivid.hex, 'light-blue-vivid': lightBlueVivid.hex},
    neutral: {...grey.hex},
    support: {...redVivid.hex, teal: teal.hex}
}

export const paletteFourteen = {
    primary: {...orange.hsl, 'lime-green': limeGreen.hsl},
    neutral: {...grey.hsl},
    support: {...lightBlue.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteFourteenHex = {
    primary: {...orange.hex, 'lime-green': limeGreen.hex},
    neutral: {...grey.hex},
    support: {...lightBlue.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteFifteen = {
    primary: {...blue.hsl},
    neutral: {...blueGrey.hsl},
    support: {...tealVivid.hsl, yellow: yellow.hsl, red: red.hsl}
}

export const paletteFifteenHex = {
    primary: {...blue.hex},
    neutral: {...blueGrey.hex},
    support: {...tealVivid.hex, yellow: yellow.hex, red: red.hex}
}

export const paletteSixteen = {
    primary: {...purple.hsl, 'red-vivid': redVivid.hsl},
    neutral: {...blueGrey.hsl},
    support: {...tealVivid.hsl, 'yellow-vivid': yellowVivid.hsl}
}

export const paletteSixteenHex = {
    primary: {...purple.hex, 'red-vivid': redVivid.hex},
    neutral: {...blueGrey.hex},
    support: {...tealVivid.hex, 'yellow-vivid': yellowVivid.hex}
}

export const paletteSeventeen = {
    primary: {...magenta.hsl, 'orange-vivid': orangeVivid.hsl},
    neutral: {...blueGrey.hsl},
    support: {...yellowVivid.hsl, 'red-vivid': redVivid.hsl, 'green-vivid': greenVivid.hsl}
}

export const paletteSeventeenHex = {
    primary: {...magenta.hex, 'orange-vivid': orangeVivid.hex},
    neutral: {...blueGrey.hex},
    support: {...yellowVivid.hex, 'red-vivid': redVivid.hex, 'green-vivid': greenVivid.hex}
}

export const paletteEighteen = {
    primary: {...purple.hsl},
    neutral: {...warmGrey.hsl},
    support: {...cyan.hsl, 'red-vivid': redVivid.hsl, yellow: yellow.hsl, 'green-vivid': greenVivid.hsl}
}

export const paletteEighteenHex = {
    primary: {...purple.hex},
    neutral: {...warmGrey.hex},
    support: {...cyan.hex, 'red-vivid': redVivid.hex, yellow: yellow.hex, 'green-vivid': greenVivid.hex}
}

export const paletteNineteen = {
    primary: {...indigo.hsl, 'orange-vivid': orangeVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...magentaVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl, 'green-vivid': greenVivid.hsl}
}

export const paletteNineteenHex = {
    primary: {...indigo.hex, 'orange-vivid': orangeVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...magentaVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex, 'green-vivid': greenVivid.hex}
}

export const paletteTwenty = {
    primary: {...lightBlue.hsl, green: green.hsl},
    neutral: {...coolGrey.hsl},
    support: {...purple.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwentyHex = {
    primary: {...lightBlue.hex, green: green.hex},
    neutral: {...coolGrey.hex},
    support: {...purple.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteTwentyOne = {
    primary: {...orangeVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...indigo.hsl, red: red.hsl, yellow: yellow.hsl, green: green.hsl}
}

export const paletteTwentyOneHex = {
    primary: {...orangeVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...indigo.hex, red: red.hex, yellow: yellow.hex, green: green.hex}
}

export const paletteTwentyTwo = {
    primary: {...cyan.hsl, 'lime-green': limeGreen.hsl},
    neutral: {...coolGrey.hsl},
    support: {...blue.hsl, purple: purple.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwentyTwoHex = {
    primary: {...cyan.hex, 'lime-green': limeGreen.hex},
    neutral: {...coolGrey.hex},
    support: {...blue.hex, purple: purple.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteTwentyThree = {
    primary: {...indigo.hsl, 'cyan-vivid': cyanVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...pinkVivid.hsl, 'red-vivid': redVivid.hsl, 'yellow-vivid': yellowVivid.hsl, 'green-vivid': greenVivid.hsl}
}

export const paletteTwentyThreeHex = {
    primary: {...indigo.hex, 'cyan-vivid': cyanVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...pinkVivid.hex, 'red-vivid': redVivid.hex, 'yellow-vivid': yellowVivid.hex, 'green-vivid': greenVivid.hex}
}

export const paletteTwentyFour = {
    primary: {...tealVivid.hsl},
    neutral: {...grey.hsl},
    support: {...yellowVivid.hsl, 'red-vivid': redVivid.hsl}
}

export const paletteTwentyFourHex = {
    primary: {...tealVivid.hex},
    neutral: {...grey.hex},
    support: {...yellowVivid.hex, 'red-vivid': redVivid.hex}
}

export const paletteTwentyFive = {
    primary: {...yellow.hsl},
    neutral: {...grey.hsl},
    support: {...blue.hsl, orange: orange.hsl, red: red.hsl, green: green.hsl}
}

export const paletteTwentyFiveHex = {
    primary: {...yellow.hex},
    neutral: {...grey.hex},
    support: {...blue.hex, orange: orange.hex, red: red.hex, green: green.hex}
}

export const paletteTwentySix = {
    primary: {...cyan.hsl, 'lime-green': limeGreen.hsl},
    neutral: {...grey.hsl},
    support: {...blue.hsl, orange: orange.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwentySixHex = {
    primary: {...cyan.hex, 'lime-green': limeGreen.hex},
    neutral: {...grey.hex},
    support: {...blue.hex, orange: orange.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteTwentySeven = {
    primary: {...blue.hsl, orange: orange.hsl},
    neutral: {...grey.hsl},
    support: {...cyan.hsl, 'lime-green': limeGreen.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwentySevenHex = {
    primary: {...blue.hex, orange: orange.hex},
    neutral: {...grey.hex},
    support: {...cyan.hex, 'lime-green': limeGreen.hex, red: red.hex, yellow: yellow.hex}
}

export const paletteTwentyEight = {
    primary: {...pinkVivid.hsl, 'orange-vivid': orangeVivid.hsl},
    neutral: {...coolGrey.hsl},
    support: {...blue.hsl, purple: purple.hsl, red: red.hsl, yellow: yellow.hsl}
}

export const paletteTwentyEightHex = {
    primary: {...pinkVivid.hex, 'orange-vivid': orangeVivid.hex},
    neutral: {...coolGrey.hex},
    support: {...blue.hex, purple: purple.hex, red: red.hex, yellow: yellow.hex}
}
