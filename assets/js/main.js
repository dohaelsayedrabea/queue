(function($) {
    "use strict";
    /*
  < !-- ============================================================== -->
  < !--Loading js -- >
  < !-- ============================================================== -->
*/
    $(window).on('load', function() {
        setTimeout(function() { // allowing 3 secs to fade out loader
            $('.screen').fadeOut('slow');
        }, 3500);
    });
})(jQuery);