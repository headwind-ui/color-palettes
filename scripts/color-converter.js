const fs = require('fs')
const path = require('path')

/**
 * array colors to map of colors
 * @param {string[]} colors
 * @returns  {any}
 */
function arrayColorsToMap(colors) {
    const variants = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
    const map = {}
    return variants.map((variant, i) => ({[variant]: colors[i]})).reduce((acc, curr) => ({...acc, ...curr}), map)
}
/**
 * sort hsl colors by brightness
 * @param {string[]} hslColors
 */
function sortHSLColorsByBrightness(hslColors) {
    return hslColors.sort((a, b) => {
        const aBrightness = getHSLBrightness(a)
        const bBrightness = getHSLBrightness(b)
        return bBrightness - aBrightness
    })
}

/**
 * sort hex colors by brightness
 * @param {*} hexColors
 * @returns {string[]}
 */
function sortHexColorsByBrightness(hexColors) {
    return hexColors.sort((a, b) => {
        const aBrightness = getHexBrightness(a)
        const bBrightness = getHexBrightness(b)
        return bBrightness - aBrightness
    })
}

/**
 * get brightness of color in HSL hsl(216, 100%, 93%)
 * @param {string} hslColor
 * @returns {number}
 */
function getHSLBrightness(hslColor) {
    const [, , brightness] = hslColor.split(',')
    return parseInt(brightness.replace('%', ''))
}

/**
 * get brightness of color in HEX #ff0000
 * @param {string} hexColor
 */
function getHexBrightness(hexColor) {
    //get rgb values
    const hasFullSpec = hexColor.length == 7
    const m = hexColor.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g)
    if (!m) return 0
    const r = parseInt(m[0], 16)
    const g = parseInt(m[1], 16)
    const b = parseInt(m[2], 16)
    //get brightness
    return Math.round((r * 299 + g * 587 + b * 114) / 1000)
}

//read colors.txt
let colorsPath = path.join(__dirname, 'colors.txt')
let colors = fs.readFileSync(colorsPath, 'utf8')
let colorsArray = colors.split('\n')
let hslColors = []
let hexColors = []
let colorsMap = {}
colorsArray.forEach(color => {
    //continue if color is empty
    if (color.length === 0) return

    if (color.startsWith('#')) {
        hexColors.push(color)
    } else if (color.startsWith('hsl')) {
        hslColors.push(color)
    } else {
        //get color name remove spaces, parenthesis
        const colorName = color
            .replace(/\s+/g, '_')
            .replace(/\(|\)/g, '')
            .toLowerCase()
            .replace(/_([a-z])/g, match => match[1].toUpperCase())
        colorsMap[colorName] = {}
        colorsMap[colorName].hex = arrayColorsToMap(sortHexColorsByBrightness(hexColors))
        colorsMap[colorName].hsl = arrayColorsToMap(sortHSLColorsByBrightness(hslColors))
        hexColors = []
        hslColors = []
    }
})

//write src/colors.ts with every color exported
let colorsPathSrc = path.join(__dirname, '../src/colors.ts')
let colorsSrc = Object.entries(colorsMap).map(color => {
    return `export const ${color[0]} = {
    hex: ${JSON.stringify(color[1].hex)},
    hsl: ${JSON.stringify(color[1].hsl)}
}\n`
})
fs.writeFileSync(colorsPathSrc, colorsSrc.join('\n\n'), {flag: 'w'})
