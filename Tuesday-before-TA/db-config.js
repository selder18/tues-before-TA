const mysql = require('mysql');

const itIsAnObject = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'prep'
};

const connection = mysql.createConnection(itIsAnObject);
connection.connect((err, data) => {
  if (err) console.error(err, "AHHHHHHHH")
  else console.log('MADE IT THERE AND BACK AGAIN');
});

module.exports = { connection };