const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello from container');
});

module.exports = app;
