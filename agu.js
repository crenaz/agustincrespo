var express = require('express');

var app = express();

app.use(require('./controllers/index'));
app.use(require('./controllers/about'));

app.listen(process.env.PORT);
