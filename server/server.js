var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3000;
var path = require( 'path' );
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var x =0;
var y=0;

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
router.post('/add',urlEncodedParser, function(req, res) {
    console.log('im the addition page!');
     x = Number(req.body.xValue);
     y= Number(req.body.yValue);
    var sum =  x+y;
    res.send("Server sent: " + sum);
});
//subtraction route
router.post('/subtract', urlEncodedParser, function(req, res) {
  console.log('im the subtraction page!');
  x = Number(req.body.xValue);
  y= Number(req.body.yValue);
 var difference =  x-y;
 res.send("Server sent: " + difference);
});
//multiplication route
router.post('/multiply', urlEncodedParser, function(req, res) {
    console.log('im the multiplication page!');
    x = Number(req.body.xValue);
    y= Number(req.body.yValue);
   var total =  x*y;
   res.send("Server sent: " + total);
});
//division route
router.post('/divide', urlEncodedParser, function(req, res) {
    console.log('im the division page!');
    x = Number(req.body.xValue);
    y= Number(req.body.yValue);
   var result =  x/y;
   res.send("Server sent: " + result);
});

//use router
app.use('/', router);
