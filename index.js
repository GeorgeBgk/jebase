const fs = require('fs')

module.exports.Jebase = function (file, defaults) {
  if (!fs.existsSync(file)) {
    if (defaults) {
      fs.writeFileSync(file, JSON.stringify(defaults))
    } else {
      fs.writeFileSync(file, '{}')
    }
  }
  this.data = JSON.parse(fs.readFileSync(file, {encoding: 'utf8'}))
  this.write = function () {
    fs.writeFileSync(file, JSON.stringify(this.data))
  }
}
