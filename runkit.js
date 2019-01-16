const jb = require('jebase')
const db = new jb.Jebase('data.json', {
  default: 'values'
})
db.data.hello = 'world'
db.write()
