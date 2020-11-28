(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".content").length > 0)
          {
              $(".content").fadeOut("slow");
          }
      });
  })(jQuery)