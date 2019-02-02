## Jebase - An easy way to store settings or small databases

[![Build Status](https://travis-ci.com/gbougakov/jebase.svg?branch=master)](https://travis-ci.com/gbougakov/jebase)
[![npm](https://img.shields.io/npm/dy/jebase.svg)](https://npmjs.org/package/jebase)
[![npm](https://img.shields.io/npm/v/jebase.svg)](https://npmjs.org/package/jebase)
[![license](https://img.shields.io/github/license/gbougakov/jebase.svg)](https://github.com/gbougakov/jebase/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fjebase.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fjebase?ref=badge_shield)
### First things - first
`npm i jebase`

### Initialization
```js
const { Jebase } = require('jebase')
const db = new Jebase("somewhweretostore.json", {
	accounts: [],
	something: true
})
```
#### What does this code do?
1. Includes Jebase
2. Loads the database from `somewheretostore.json`, or if the file does not exist, creates it with these contents: 
```json
{
	"accounts": [],
	"something": true
}
```
3. Done!
### Interacting with data
When you load a database, it is stored inside `db.data` object, so you can manipulate it, like it’s a regular JavaScript object.
```js
db.data.accounts.push("george@bygeorgenet.me")
if (db.data.something) {
		console.log("Something is enabled")
}
```
If you have changed something in the database and want to save it, just call `db.write();`!

### Methods
#### `new Jebase(file, defaults)`
_Returns `db`_

Loads a database file

- file - relative or absolute path to JSON file
- defaults - what to write to the database if the file does not exist
#### `db.data`
_Returns `object`_
DB contents
#### `db.write()`
_Returns void_
Writes JSON data to disk


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgbougakov%2Fjebase.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgbougakov%2Fjebase?ref=badge_large)