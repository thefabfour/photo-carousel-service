const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, 'public');

app.use(express.json);

app.use('/', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`${req.method} received on ${req.path}`);
  next();
});

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
