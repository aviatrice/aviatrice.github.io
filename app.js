var express = require('express');
var app = express();

app.set('views', [__dirname + '/views', __dirname + '/submodules']);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  app.use(express.static('static'));
  res.render('index.html');
});

/**
 * Routes requests to /angular-dynamic-html to the demo contained in that submodule.
 * Sets appropriate static directories to support demo before rendering.
 * This may not be extensible. Remains to be seen. For now, works for the single demo.
 */
app.get('/angular-dynamic-html', function (req, res) {
  app.use(express.static('submodules/angular-dynamic-html'));
  app.use(express.static('submodules/angular-dynamic-html/demo'));
  res.render('angular-dynamic-html/demo/src/demo.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
