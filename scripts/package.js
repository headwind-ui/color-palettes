const {readFileSync,writeFileSync} = require('fs');

// carga el archivo de configuración package.json
let packageJson = JSON.parse(readFileSync('package.json', 'utf8'))

delete packageJson.scripts

writeFileSync('lib/package.json', JSON.stringify(packageJson, null, 2))
