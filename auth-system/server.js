var express = require('express');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static('public'));

require("./routes/user")(app);

app.listen(8000,function(){console.log('Started Server')});