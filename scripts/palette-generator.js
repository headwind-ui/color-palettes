const fs = require('fs')
const path = require('path')

/**
 * @typedef Palette
 * @type {object}
 * @property {string[]} primary
 * @property {string[]} neutral
 * @property {string[]} support
 */

/**
 * get colors from palette
 * @param {Palette} palette
 */
function getColors(palette) {
    const {primary, neutral, support} = palette
    const colors = [...primary, ...neutral, ...support]
    return colors
}

/**
 * Generate palette structure from schema
 * @param {Palette} paletteDef
 * @param {'hex','hsl'} colorType
 */
function generatePalette(paletteDef, colorType) {
    const schema = JSON.parse(JSON.stringify(paletteDef))
    let palette = '{\n'
    Object.entries(schema).forEach(([key, value]) => {
        const defaultValue = value.splice(0, 1)
        palette += `${key}:{...${defaultValue}.${colorType},\n`
        if (value.length >= 1) {
            value.forEach(color => {
                palette += `'${color.replace(/([A-Z])/g, match => '-' + match[0].toLowerCase())}':${color}.${colorType},\n`
            })
        }
        palette += '},\n'
    })
    palette += '}'
    return palette
}

//read ./palettes.json
let palettesPath = path.join(__dirname, 'palettes.json')
let palettes = JSON.parse(fs.readFileSync(palettesPath, 'utf8'))
let importedColors = new Set()
let palettesSrc = ''
//get unique colors from palettes
Object.values(palettes).forEach(palette => {
    const colors = getColors(palette)
    colors.forEach(color => {
        importedColors.add(color)
    })
})
//sort colors by name
importedColors = Array.from(importedColors).sort()

//add colors to palettesSrc
palettesSrc += `import {${importedColors.join(', ')}} from './colors'\n\n`

//write src/palettes.ts with every palette exported
Object.entries(palettes).forEach(([paletteName, palette]) => {
    palettesSrc += `export const ${paletteName} = ${generatePalette(palette, 'hsl')}\n\n`
    palettesSrc += `export const ${paletteName}Hex = ${generatePalette(palette, 'hex')}\n\n`
})

fs.writeFileSync(path.join(__dirname, '../src/palettes.ts'), palettesSrc, {flag: 'w'})
