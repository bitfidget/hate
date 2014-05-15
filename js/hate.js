var getRevenge = {
  initialize : function () {
    // inject css
    $('head').append('<link rel="stylesheet" type="text/css" href="' + hateHost + 'css/hate.css">');
    
    winWidth = $(window).width();
    winHeight = $(window).height();
    $winBody = $('body');


    $winBody.find('script').remove();
    $winBody.find('noscript').remove();
    $objectOfhate = $winBody.children().last()
    this.killThemAll();
  },
  killDivs : function () {
    var kill = $winBody.children().last();
    if (kill.children().length > 0){
      kill = kill.children().last();
    } else {
      kill.fadeOut(500, function () {
        getRevenge.killDivs();
      });
    }
  },
  killElems : function () {
    
    $objectOfhate.focus();

    $objectOfhate.is("div,ul,ol")



    if ($objectOfhate.children().length > 1){
      $objectOfhate = $objectOfhate.children().last();
      getRevenge.killElems();
    } else {
      
      $objectOfhate.fadeOut(500, function () {
        $objectOfhate.remove();
        $objectOfhate = $winBody.children().last()
        getRevenge.killElems();
      });
    }
  },
  killThemAll : function () {
    $objectOfhate.focus();

    if ( ( $objectOfhate.is("div,ul,ol,section,article") === true ) && ( $objectOfhate.children().length > 0 ) ) {
      $objectOfhate = $objectOfhate.children().last();
      getRevenge.killThemAll();
    } else {
      $objectOfhate.fadeOut(500, function () {
        $objectOfhate.remove();
        $objectOfhate = $winBody.children().last()
        getRevenge.killThemAll();
      });
    }

  }
};

var winWidth, winHeight, $winBody, $objectOfhate;
var hateHost = 'http://modelcitizen.com.au/hate/';

$(document).ready(function(){
  getRevenge.initialize();
});
