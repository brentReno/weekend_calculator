console.log(' Calc.js is sourced');
var buttonData=[{name: 'zero', value:0}, {name: 'one', value:1},{name: 'two', value:2}, {name:'three', value:3},
{name:'four', value:4}, {name:'five', value:5}, {name:'six', value:6}, {name:'seven', value:7}, {name:'eight', value:8},
{name:'nine', value:9}, {name: 'add', value: '+'}, {name:'subtract', value:'-'},{name: "divide", value: '/'}, {name:'multiply', value: '*'},
{name: 'equals', value:'='} ];

$(document).ready(function(){
  var numberDisplayText='';
  var dataObject= {xValue:'', yValue:"", type:'',};
  console.log('JQ is running');
  //show calc buttons
  displayButtons();

    // number buttons on click
  $('body').on('click','.numberButton', function(){
    console.log('In numberButton onClick');
    numberDisplayText+=$(this).attr('data-id');
    $('#calcDisplay').html(numberDisplayText);
    });//end numberButton onClick

    //function button on Click
    $(".functionButton").click(function(){
      dataObject.yValue="";
      dataObject.xValue= Number(numberDisplayText);
      numberDisplayText="";
      $('#calcDisplay').empty();
      dataObject.type= $(this).attr('id');
      console.log("data to be sent", dataObject);
      console.log('display',numberDisplayText);
    });//end function button on click

    //equals button on click
    $('.equalsButton').on('click',function(){
      dataObject.yValue= Number(numberDisplayText);
      numberDisplayText="";
      $('#calcDisplay').empty();
      console.log("data to be sent", dataObject);
      console.log('display',numberDisplayText);
      switch (dataObject.type) {
        case "add":
          $.ajax({
            type: "POST",
            url: "/add",
            data: dataObject,
            success: function(data){
              console.log('ajax success:', data);
            }//end success
          });//end AJAX
          break;
          case"subtract":
          $.ajax({
            type: "POST",
            url: "/subtract",
            data: dataObject,
            success: function(data){
              console.log('ajax success:', data);
            }//end success
          });//end AJAX
          break;
          case "multiply":
          $.ajax({
            type: "POST",
            url: "/multiply",
            data: dataObject,
            success: function(data){
              console.log('ajax success:', data);
            }//end success
          });//end AJAX
          break;
          case "divide":
          $.ajax({
            type: "POST",
            url: "/divide",
            data: dataObject,
            success: function(data){
              console.log('ajax success:', data);
            }//end success
          });//end AJAX
          break;
        default:
        console.log('Does not compute');
      }
    });//end equals button onClick
});//end DOC ready

var displayButtons = function(){
  var calcDivText = "";
  for (var i = 0; i < buttonData.length; i++) {
    if(i%5 === 0 && i<16){
     calcDivText += '<br>';
   } //end if
    if(buttonData[ i ].value == '=' ){
     calcDivText+='<button class="equalsButton" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
     $('#calcDiv').html(calcDivText);
    }//end equals if
    else if(buttonData[ i ].value == '+' ||buttonData[ i ].value == '-' ||buttonData[ i ].value == '/' ||buttonData[ i ].value == '*' ){
      calcDivText +='<button class="functionButton" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
      $('#calcDiv').html(calcDivText);
    } else {
      calcDivText +='<button class="numberButton" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
      $('#calcDiv').html(calcDivText);
    } //end if else

  }// end for
};// end display buttons
