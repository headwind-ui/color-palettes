# Color palettes for tailwindcss

## Installation

using `npm`
```bash
npm i @headwind-ui/color-palettes
```
using `yarn`
```bash
yarn add @headwind-ui/color-palettes
```
using `pnpm`
```bash
pnpm i @headwind-ui/color-palettes
```

## Usage

import a palette from `@headwind-ui/color-palettes`
```js
const { paletteOne } = require('@headwind-ui/color-palettes')

module.exports = {
  theme: {
   colors: {
     ...paletteOne,
   },
  },
}
```

import a color from `@headwind-ui/color-palettes`
```js
const { red } = require('@headwind-ui/color-palettes')

const color = red.hex // for get hex color
const color = red.hsl // for get hsl color
```

## Color Palettes

for view all color palettes, please visit [headwind-ui/color-palettes](headwind.urielcuriel.dev/color-palettes)

