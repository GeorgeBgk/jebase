var jb = require('jebase')
var db = new jb.Jebase('data.json', {
  default: 'values'
})
db.data.hello = 'world'
db.write()
