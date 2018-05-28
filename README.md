## Jebase - An easy way to store settings or small databases
[![JavaScript Style Guide](https://rawcdn.githack.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
### First things - first
`npm i jebase`

### Initialization
	var jb = require('jebase')
	var db = new jb.Jebase("somewhweretostore.json", {
			accounts: [],
			something: true
	})
#### What does this code do?
1. Includes Jebase
2. Loads the database from `somewheretostore.json`, or if the file does not exist, creates it with these contents: 
		{
			accounts: [],
			something: true
		}
3. Done!
### Interacting with data
When you load a database, it is stored inside `db.data` object, so you can manipulate it, like it’s a regular JavaScript object.

	db.data.accounts.push("george@bygeorgenet.me")
	if (db.data.something) {
			console.log("Something is enabled")
	}
	
If you have changed something in the database and want to save it, just call `db.write();`!

### Methods
#### `new jb.Jebase(file, defaults)`
_Returns `db`_
Loads a database file
file - relative or absolute path to database file
defaults - what to write to the database if the file does not exist
#### `db.data`
_Returns `object`_
#### `db.write()`
_Returns void_
Writes database data to disk
#### `new jb.jebase(file, defaults)` _deprecated_
This constructor is deprecated, use `new jb.Jebase` instead