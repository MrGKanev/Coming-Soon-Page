(function($) {
"use strict";

/*--------------------------------------------------------------
  1. CUSTOM FUNCTION
--------------------------------------------------------------*/

/* is_exist() */
jQuery.fn.is_exist = function(){return this.length>0;}

/* contentCenter() */
function contentCenter($content){
  var content = $($content),
  half = content.outerHeight() / 2,
  calc = "calc(50% - "+half+"px)";
  content.css({
    top: calc
  });
}


/**
 * START DOCUMENT READY EVENT
 * @param event
 */
$(function() {

/*--------------------------------------------------------------
   JQUERY CENTER FOR CONTENT
--------------------------------------------------------------*/
if ( $('.jquery-center').is_exist() ) {
  contentCenter('.jquery-center');
}


/*--------------------------------------------------------------
   MAGNIFIC POPUP INIT
--------------------------------------------------------------*/
if ( $('.single_popup').length > 0 ) {
  $('.single_popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
}


/*--------------------------------------------------------------
   CONTENT ANIMATE FUNCTION
--------------------------------------------------------------*/
function contentToggle($this){

  var self    = $this,
    details   = $('#marshall-details'),
    content   = $('#marshall-animate-area'),
    close     = $('#marshall-close-content'),
    hide      = content.data('hide'),
    animation = details.data('animation');

  if ( self.hasClass('marshall-animate-open') ) {
    close.hide(0);
    self.removeClass('marshall-animate-open');
    content.removeClass(hide).addClass(animation).addClass('mrs-active');
    details.removeClass(animation).addClass(hide);
  } else {
    close.delay(600).show(0);
    self.addClass('marshall-animate-open');
    content.removeClass(animation).addClass(hide);
    details.removeClass(hide).addClass(animation).addClass('mrs-active');
  }

}

/*--------------------------------------------------------------
   CONTENT APPEAR ANIMATION INIT
--------------------------------------------------------------*/
$(document).on("click", ".marshall-animate-btn", function(e){
  e.preventDefault();
  var self    = $(this);

  if(window.matchMedia("(min-width: 1025px)").matches){
    contentToggle( self );
  } else {
    scrollToDiv(e);
  }

});


function clickToSlide($this){
  
  var self    = $this,
    content   = $('#marshall-details'),
    col   = $('.marshall-col-content'),
    close     = $('#marshall-close-content-slide'),
    animation = content.data('animation');


  if ( self.hasClass('marshall-animate-open') ) {
    close.hide(0);
    self.removeClass('marshall-animate-open');
    content.removeClass(animation);
    col.removeClass('mrs-default-content-off');
  } else {
    close.delay(600).show(0);
    self.addClass('marshall-animate-open');
    content.addClass(animation);
    col.addClass('mrs-default-content-off');
  }

}

$(document).on("click", ".marshall-content-view", function(e){
  e.preventDefault();
  var self = $(this);

  if(window.matchMedia("(min-width: 1025px)").matches){
    clickToSlide( self );
  } else {
    scrollToDiv(e);
  }

});
/*--------------------------------------------------------------
   PARTICLES INIT
--------------------------------------------------------------*/
if ( $("#mrs_particles_can").is_exist() ) {
  $('#mrs_particles_can').particleground({
    dotColor: '#FFF',
    lineColor: '#FFF'
  });
}
/*--------------------------------------------------------------
   TEXTAREA AUTOSIZE
--------------------------------------------------------------*/
if ( $('textarea#mrs_message').is_exist() ) {
  $('textarea#mrs_message').textareaAutoSize();
}


/*--------------------------------------------------------------
   PLAX PARALLAX INIT
--------------------------------------------------------------*/
if ( $('.js-plaxify').is_exist() ) {
  // Plaxify all `js-plaxify` element layers
  var layers = $('.js-plaxify')

  $.each(layers, function(index, layer){
    $(layer).plaxify({
      xRange: $(layer).data('xrange') || 0,
      yRange: $(layer).data('yrange') || 0,
      invert: $(layer).data('invert') || false
    })
  })

  $.plax.enable()
}
/*--------------------------------------------------------------
   RIPPLES CANVAS
--------------------------------------------------------------*/
var ripple = $('body#mrs-ripples-canvas');
if (ripple.is_exist()) {
  ripple.ripples({
    resolution: 512,
    dropRadius: 10, //px
    perturbance: 0.04,
    interactive: false
  });
  setInterval(function () {
    var $el = ripple;
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 3000);
}

}); // end document ready
/**
 * START WINDOW LOAD EVENT
 * @param event
 */
$(window).on("load", function(){
/**
 * START WINDOW RESIZE EVENT
 * @param event
 */
$(window).on("resize", function(){

  /*--------------------------------------------------------------
     JQUERY CENTER CONTENT REINITIALIZE
  --------------------------------------------------------------*/
  if ( $('.jquery-center').is_exist() ) {
    contentCenter('.jquery-center');
  }
});




})(jQuery); // end anonymous function