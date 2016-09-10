var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3000;
var path = require( 'path' );
var router = express.Router();

//start listening
app.listen( port, function(){
  console.log('The server is listening on port 3000');
});

//set up base url
app.get('/', function(req, res){
  console.log("The base URL has been hit");
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//set public folder for use
app.use(express.static('public'));

//set up routes
//addition route
router.get('/add', function(req, res) {
    res.send('im the addition page!');
});
//subtraction route
router.get('/subtract', function(req, res) {
    res.send('im the subtraction page!');
});
//multiplication route
router.get('/multiply', function(req, res) {
    res.send('im the multiplication page!');
});
//division route
router.get('/divide', function(req, res) {
    res.send('im the division page!');
});

//use router
app.use('/', router);
