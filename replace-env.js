const fs = require('fs')
const files = fs.readdirSync('dist/assets')
const indexFiles = files.filter((file) => /^(index|app).[a-z0-9]+.js$/.test(file))
indexFiles.forEach((indexFile) => {
  const r = new RegExp('"\\${(VITE_APP_FRONTEND_(.*?)})', 'g')
  const content = fs.readFileSync('dist/assets/' + indexFile, 'utf8').replace(r, (m) => {
    const varName = m.replace(/^"\${/, '').replace(/}$/, '')
    return `window.globalJSConfig.${varName}+"`
  })
  fs.writeFileSync('dist/assets/' + indexFile, content)
})
