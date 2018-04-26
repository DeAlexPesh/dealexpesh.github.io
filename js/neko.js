$(document).ready(function() {
  function switchImg(classImg) {
    return new Promise(function(resolve, reject) {
      var $oldImg = $('#neko-wrapper').find('.neko:first')
      $('#neko-wrapper').prepend( $('<div class="neko ' + classImg + '"></div>').css({ opacity: 0 }) );
      $('#neko-wrapper').find('.neko:first').animate({ opacity: 1 }, 500, function() { 
        $oldImg.remove(); 
        resolve(""); 
      });
    });
  };
  
  setInterval(function() {
    $('#neko-wrapper').animate({ left: 0 }, 2000, function() {
      setTimeout(function() {
        switchImg('p01').then(function() {
          $('#neko-wrapper').animate({ left: -301 }, 1000, function() {
            switchImg('p00');
          })
        })
      }, 2000)
    })
  }, 6000);//Math.floor(Math.random() * (300000 - 6000)) + 6000);
  
});
