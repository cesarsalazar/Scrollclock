$(function(){
  
  // 1 minute  = 6 deg = 2 px
  // 1 hour = 15 deg = 120px
  
  var total = $(document).height() - $(window).height();
  var hour = total/24;
  var minute = hour/60;
  
  // Hands
  var minutes_hand = $('#minutes');
  var hours_hand = $('#hours');
  
  // Display
  var hours_display = $('.hours');
  var minutes_display = $('.minutes');
  
  $(document).scroll(function(){
    var current = $(this).scrollTop();

    // Clock Rotation
    var rotation_hours = "rotate(" + 30 * current / hour + "deg)";
    var rotation_minutes = "rotate(" + 6 * current / minute + "deg)";
    rotate(minutes_hand, rotation_minutes);
    rotate(hours_hand, rotation_hours);
    
    // Clock display
    var display_hours = (((h = Math.floor( (current / hour) % 24)) > 12) ? h - 12 : h).toString();
    var display_minutes = (Math.floor( (current / minute) % 60 )).toString();   
    display(hours_display, display_hours);
    display(minutes_display, display_minutes);
  
  })
  
  // Ensure a two-digit string and a "00" in case the value is negative
  var display = function(element, time){
    var d = ( time.length < 2 ) ? "0" + time : ( (time < 0) ? "00" : time );
    element.text( d ); 
  }
  
  // Apply CSS3 rotation
  var rotate = function(element, rotation){
    element.css({
      "-webkit-transform": rotation,
      "-moz-transform": rotation,
      "-ms-transform": rotation,
      "-o-transform": rotation,
      "transform": rotation  
    })
  }; 
  
})