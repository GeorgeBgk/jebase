var fs = require('fs')

module.exports.jebase = function (file, defaults) {
  process.emitWarning(
    'Using `new jb.jebase` will soon stop working. ' +
    'Use `new jb.Jebase` instead',
    'DeprecationWarning'
  )
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
