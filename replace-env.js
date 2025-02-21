const fs = require('fs')
const files = fs.readdirSync('dist/js')
const indexFiles = files.filter((file) => /^(index|app).[a-z0-9]+.js$/.test(file))
indexFiles.forEach((indexFile) => {
  const r = new RegExp('"\\${(VUE_APP_FRONTEND_(.*?)})', 'g')
  const content = fs.readFileSync('dist/js/' + indexFile, 'utf8').replace(r, (m) => {
    const varName = m.replace(/^"\${/, '').replace(/}$/, '')
    return `window.globalJSConfig.${varName}+"`
  })
  fs.writeFileSync('dist/js/' + indexFile, content)
})
