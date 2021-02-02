const path = require('path');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

for (let i = 2; i < 5; i++) {
  app.get(`/index-${i}`, (req, res) => {
    res.sendFile(path.join(__dirname, `/index-${i}.html`));
  });
}

const port = 8080;
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at: http://localhost:' + port);
});