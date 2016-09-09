var express = require( 'express' );
var app = express();
var path = require( 'path' );

//start listening
app.listen(3000, 'localhost', function(){
  console.log('The server is listening on port 3000');
});

//set up base url
app.get('/', function(req, res){
  console.log("The base URL has been hit");
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//set public folder for use
app.use(express.static('public'));

//post route
app.post('/math', function(req, res){
  console.log('The math has been hit!!!!');
  res.send('Some math will be done here.');
});//end math post route
