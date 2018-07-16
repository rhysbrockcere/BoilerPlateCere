;$(function() {
    $( "#slider_1" ).slider({
      value:100,
      min: 0,
      max: 500,
      step: 50,
      slide: function( event, ui ) {
        $( "#FACTOR_1" ).val( "£" + ui.value );
      }
    });
    $( "#FACTOR_1" ).val( "£" + $( "#slider_1" ).slider( "value" ) );
});(jQuery);