$(document).ready(function() {
  var c = ['rgba(255,0,0,0.2)','rgba(0,255,0,0.2)','rgba(0,0,255,0.2)'];
  var i = 0;  
  setInterval(function() {
    $('#colored').animate({ backgroundColor: c[i] }, 4000);
    i = i < 2 ? i + 1 : 0;
    alert($('#colored').css( "background-color" ));
  }, 5000);  
});
