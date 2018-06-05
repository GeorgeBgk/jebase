var test = require('ava').test
var fs = require('fs')
var jb = require('./index')
var db = new jb.Jebase('test.json', {
  accounts: []
})
test('file created', function (t) {
  t.true(fs.existsSync('test.json'), 'file is not created')
  db.write()
})
db.data.accounts.push('hi')
db.write()
test('db made properly', function (t) {
  t.deepEqual(db.data, { accounts: ['hi'] }, 'db is not made properly')
})
test('file written properly', function (t) {
  t.deepEqual(JSON.parse(fs.readFileSync('test.json', {encoding: 'utf8'})), { accounts: ['hi'] }, 'file is not written properly')
})
