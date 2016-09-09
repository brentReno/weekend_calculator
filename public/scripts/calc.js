console.log(' Calc.js is sourced');


$(document).ready(function(){
  console.log('JQ is running');
  $('#calc').on('click', 'button', function(){
    console.log('A button has been pressed');
  });

  $.ajax({
    type: "POST",
    url: "/math",
    success: function(data){
      console.log('ajax success:', data);
    }//end success
  });//end AJAX
});//end DOC ready
