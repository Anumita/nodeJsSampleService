'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Docker hub -update 3. CDshould automatically update the azure web app.\n');
});

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);
