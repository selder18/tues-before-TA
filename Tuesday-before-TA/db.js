const db = require('./db-config.js');

const catInsert = (name) => {
  console.log(db.connection, 'DB INNNN DB')
  db.connection.query(`INSERT INTO cats (catname) VALUES ("${name}")`, (err, data) => {
    if (err) { console.error(err, "Ya dun goofed") }
    else { console.log('success') };
  });
}
const getCats = (callback) => {
  db.connection.query("SELECT catname FROM cats", callback)
}

module.exports = {catInsert, getCats};