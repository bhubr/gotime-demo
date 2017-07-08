const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/time', (req, res) => {
  const timestamp = new Date().getTime();
  res.status(200).send('' + timestamp);
  console.log(timestamp);
});

app.listen(3232);