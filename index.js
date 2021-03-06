var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

var cool = require('cool-ascii-faces');



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

app.get('/cool', function(request, response) {
  response.send(cool());
});



app.get('/random', function (request, response) {
  //landing page for 30 day challenge mini projects
  response.render('random');
});
//  "start": "node index.js"
app.listen(process.env.PORT || 3000, function () {
 console.log(`listening on a port...`);
});
