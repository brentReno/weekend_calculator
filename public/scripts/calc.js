console.log(' Calc.js is sourced');
var buttonData=[{name: 'zero', value:0}, {name: 'one', value:1},{name: 'two', value:2}, {name:'three', value:3},
{name:'four', value:4}, {name:'five', value:5},  {name:'six', value:6}, {name:'seven', value:7},{name:'eight', value:8},
{name:'nine', value:9}, {name:'decimal', value:'.'}, {name: 'add', value: '+'},{name:'subtract', value:'-'},{name: "divide", value: '/'}, {name:'multiply', value: '*'},{name: 'equals', value:'='}, { name:"clear", value:'C'} ];

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

    //clear button on click
    $(".clearButton").click(function(){
      console.log('In clear button');
      dataObject.xValue ="";
      dataObject.yValue="";
      dataObject.Type="";
      $('#calcDisplay').empty();
      console.log("data objec:", dataObject);
      numberDisplayText="";
    });// end clear on click

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
              numberDisplayText = data.total;
              $('#calcDisplay').html(numberDisplayText);
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
              numberDisplayText = data.total;
              $('#calcDisplay').html(numberDisplayText);
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
              numberDisplayText = data.total;
              $('#calcDisplay').html(numberDisplayText);
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
              numberDisplayText = data.total;
              $('#calcDisplay').html(numberDisplayText);
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
  //create buttons
  for (var i = 0; i < buttonData.length; i++) {

    //line breaks if
    if(i%3 === 0 && i<16){
     calcDivText += '<br>';
   } //end if
   //equals button
    if(buttonData[ i ].value == '=' ){
     calcDivText+='<button class="equalsButton btn btn-default" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
     $('#calcDiv').html(calcDivText);
    }//end equals if
    // operators buttons
    else if(buttonData[ i ].value == '+' ||buttonData[ i ].value == '-' ||buttonData[ i ].value == '/' ||buttonData[ i ].value == '*' ){
      calcDivText +='<button class="functionButton btn btn-default" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
      $('#calcDiv').html(calcDivText);
    }//end operators

    // decimal button
      else if(buttonData[ i ].value =='.'){
        calcDivText +='<button class=" btn btn-default numberButton " id="'+ buttonData[ i ].name +'" data-id=".">'+buttonData[ i ].value+ "</button>";
    }//end decimal button

    //clear button
    else if(buttonData[ i ].value =="C") {
      calcDivText +='<button  class="clearButton btn btn-default" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
      $('#calcDiv').html(calcDivText);
    }// end clear button

    //number buttons
    else {
      calcDivText +='<button  class="numberButton btn btn-default" id="'+ buttonData[ i ].name +'" data-id='+ i +'>'+buttonData[ i ].value+ "</button>";
      $('#calcDiv').html(calcDivText);
    } //end if else

  }// end for
};// end display buttons
