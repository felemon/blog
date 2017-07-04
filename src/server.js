var express = require('express');
var debug = require('express-debug');
var path = require('path');
var api = require('./api');
var app = express();

app.set('port', process.env.PORT || 3001);
app.use('/api', api);

debug(app, {});

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});