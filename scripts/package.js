const {readFileSync, writeFileSync} = require('fs')

// carga el archivo de configuración package.json
let packageJson = JSON.parse(readFileSync('package.json', 'utf8'))

packageJson.main = './cjs/index.js'
packageJson.module = './mjs/index.js'
packageJson.type = 'commonjs'
packageJson.exports = {
    '.': {
        require: './cjs/index.js',
        default: './mjs/index.js'
    }
}
delete packageJson.devDependencies

writeFileSync('lib/package.json', JSON.stringify(packageJson, null, 2))
