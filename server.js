const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const db = require('./Tuesday-before-TA/db.js')

app.use(bodyParser.json({urlEncoded: false}));
app.use(express.static('/dist'));

app.post('/cats', (req, res) => {
  const wrekkedBod = req.body.data;
  console.log(wrekkedBod, 'wrekkedbod');
  db.catInsert(wrekkedBod);
  res.status(201).send('Cats herded successfully');
});

app.get('/cats', (req, res) => {
  const fresh = db.getCats((err, data) => {
    if (err) console.error(err)
    else res.send(data);
    fresh();
  });
})

app.listen(port, () => {
  console.log(db.catInsert, 'DDBB')
  console.log(`SERVER EAGERLY AWAITS INSTRUCTIONS ON ${port}`);
});