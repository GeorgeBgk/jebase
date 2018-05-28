const assert = require('assert').strict
var fs = require('fs')
var jb = require('./index')
var db = new jb.Jebase('test.json', {
  accounts: []
})
assert.ok(fs.existsSync('test.json'))
db.data.accounts.push('hi')
db.write()
assert.deepStrictEqual(JSON.parse(fs.readFileSync('test.json', {encoding: 'utf8'})), { accounts: ['hi'] })
console.log('all passed!')
