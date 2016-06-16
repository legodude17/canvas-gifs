/*global require, console*/
var express = require('express');
var app = express();
app.use(express['static']('./'));
app.get('/', function (req, res) {
  'use strict';
  res.redirect('/test.html');
});
app.listen(3000, function () {
  'use strict';
  console.log('Ready captain');
});