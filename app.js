const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.get('/about', (req, res)=>{
  res.send('About us!')
})

module.exports = app;
