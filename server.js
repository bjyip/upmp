const path = require('path');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
});
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '/products.html'));
});


const port = 8080;
app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at: http://localhost:' + port);
});
