console.log(' Calc.js is sourced');
var buttonData=[{name: 'zero', value: 0}, {name: 'one', value: 1},{name: 'two', value:2}, {name:'three', value:3},
{name:'four', value:4}, {name:'five', value:5}, {name:'six', value:6}, {name:'seven', value: 7}, {name:'eight', value: 8},
{name:'nine', value:9}, {name: 'add', value: '+'}, {name:'subtract', value:'-'},{name: "divide", value: '/'}, {name:'multiply', value: '*'} ];

$(document).ready(function(){
  var x;
  console.log('JQ is running');
  //show calc buttons
  displayButtons();
  // number buttons on click
  // $('body').on('click', )
  $.ajax({
    type: "POST",
    url: "/math",
    success: function(data){
      console.log('ajax success:', data);
    }//end success
  });//end AJAX
});//end DOC ready

var displayButtons = function(){
  var calcDivText = "";

  for (var i = 0; i < buttonData.length; i++) {
    if(buttonData[ i ].value == '+' ||buttonData[ i ].value == '-' ||buttonData[ i ].value == '/' ||buttonData[ i ].value == '*'  ){
    calcDivText +='<button class="functionButton" id="'+ buttonData[ i ].name +' data-'+buttonData[ i ].name+'="'+buttonData[ i ].value+'">'+buttonData[ i ].value+ "</button>";
    $('#calc').html(calcDivText);
  } else {
    calcDivText +='<button class="numberButton" id="'+ buttonData[ i ].name +' data-'+buttonData[ i ].name+'="'+buttonData[ i ].value+'">'+buttonData[ i ].value+ "</button>";
    $('#calc').html(calcDivText);
  }
}
};
