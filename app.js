var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayouts)





app.get('/', function (request, response) {
  response.render('index');
});

app.get('/blog', function (request, response) {
  response.render('nick');
});

app.get('/30daychallenge', function (request, response) {
  //landing page for 30 day challenge mini projects
  response.render('30daychallenge');
});

app.get('/random', function (request, response) {
  //landing page for 30 day challenge mini projects
  response.render('random');
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
