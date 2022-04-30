const express = require('express');
const { sharksList, catsList } = require('./data-files/lists');
const { randomizeArray } = require('./helpers');
const PORT = 8080;

const app = express();

app.get('/api/cats', (req, res) => {
  res.json(catsList);
})

app.get('/api/sharks', (req, res) => {
  res.json(sharksList);
})

app.get('/api/random', (req, res) => {

  const randomList = randomizeArray([...sharksList, ...catsList]);
  res.json(randomList);

})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));




