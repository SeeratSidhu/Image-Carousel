const express = require('express');
const PORT = 8080;

const app = express();

app.get('/api', (req, res) => {
  res.json({greetings: 'Hello World'});
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));