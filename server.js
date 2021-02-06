const path = require('path');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

for (let i = 1; i < 5; i++) {
  app.get(`/index-${i}.html`, (req, res) => {
    res.sendFile(path.join(__dirname, `/index-${i}.html`));
  });
}
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = 8080;
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at: http://localhost:' + port);
});