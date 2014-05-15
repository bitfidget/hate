
(function ( $ ) {
 
  $.fn.makeItRain = function () {
    
    var letters = this.text().split('');

    $.each(letters, function ( index, value ) {
      //$winBody.prepend('<div class="clusterFuck">' + value + '</div>');
    });
    
  };
 
}( jQuery ));




var getRevenge = {
  initialize : function () {
    // inject css
    $('head').append('<link rel="stylesheet" type="text/css" href="' + hateHost + 'css/hate.css">');
    
    winWidth = $(window).width();
    winHeight = $(window).height();
    $winBody = $('body');

    $winBody.find('script').remove();
    $winBody.find('noscript').remove();
    $objectOfHate = $winBody.children().last()
    this.killThemAll();
  },
  killThemAll : function () {
    $objectOfHate.focus();

    if ( ( $objectOfHate.is("div,ul,ol,section,article") === true ) && ( $objectOfHate.children().length > 0 ) ) {
      $objectOfHate = $objectOfHate.children().last();
      getRevenge.killThemAll();
    } else {

      // make all the letters explode
      $($objectOfHate).makeItRain();

      // make the div look explodey
      $objectOfHate.addClass('explodeStart');
      setTimeout(function () {
        $objectOfHate.addClass('explodeBoom');
        setTimeout(function () {
          $objectOfHate.addClass('explodeEnd');
          setTimeout(function () {
            $objectOfHate.fadeOut(300, function () {
              $objectOfHate.remove();
              $objectOfHate = $winBody.children().last()
              getRevenge.killThemAll();
            });
          }, 200);
        }, 200);
      }, 200);

      
      // $objectOfHate.fadeOut(500, function () {
      //   $objectOfHate.remove();
      //   $objectOfHate = $winBody.children().last()
      //   getRevenge.killThemAll();
      // });
    }
  }
};

var winWidth, winHeight, $winBody, $objectOfHate;
var hateHost = 'http://modelcitizen.com.au/hate/';

$(document).ready(function(){
  getRevenge.initialize();
});