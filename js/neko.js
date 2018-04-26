$(document).ready(function() {
  
  $.fn.preloadImage = function() {
    return new Promise(function(resolve, reject) {
      this.each(function() { $('<img/>')[0].src = '../img/' + this; });
      resolve("");
    });
  };

  function switchImg(classImg) {
    return new Promise(function(resolve, reject) {
      var $oldImg = $('#neko-wrapper').find('.neko:first')
      $('#neko-wrapper').prepend( $('<div class="neko ' + classImg + '"></div>').css({ display: 0 }) );
      $('#neko-wrapper').find('.neko:first').animate({ display: 1 }, 500, function() { $oldImg.remove(); resolve(""); });
    });
  };
  
  var arrImg = ['p00.png', 'p01.png']
  $(arrImg).preloadImage().then(function() {
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
  
});
