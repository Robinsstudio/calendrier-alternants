const express = require('express');
const app = express();

app.use('/', require('./calendar'));

app.listen(8080);