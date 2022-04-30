const express = require('express');
const {sharksList, catsList} = require('./data-files/lists');
const PORT = 8080;

const app = express();

app.get('/api/cats', (req, res) => {
  res.json(catsList);
})

app.get('/api/sharks', (req, res) => {
  res.json(sharksList);
})

app.get('/api/random', (re, res) => {
  
})
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));