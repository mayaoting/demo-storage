$(document).ready(function() {
  var HEADWRAP = document.getElementById('header-wrap');
  var HEADWRAP_STYLE_LIMIT = HEADWRAP.getBoundingClientRect().bottom;
  let fixedmenu = false;

  // var $li = document.getElementsByTagName('a');
  // for(let i=0;i< $li.length;i++) {
  //   $li[i].onclick = function () {
  //     $(this).siblings().removeClass('active')
  //     $(this).addClass('active')
  //   }
  // }

  $('.left-menu').each(function() {
    var $affixmenu = $(this);
    var current = null;
    var $container = $affixmenu.parent();
    var $links = $affixmenu.find('a')
    function getClosestHeader(top) {
      var last = $links.first();
      if (top < HEADWRAP_STYLE_LIMIT) {
        return last;
      }
      for (let i=0;i<$links.length;i++) {
        var $link = $links.eq(i);
        var href = $link.attr('href');
        if(href.charAt(0) === '#' && href.length > 1) {
          var $anchor = $(href).first();
          if($anchor.length > 0 ) {
            var offset = $anchor.offset();
            if(top < offset.top - 40) {
              return last;
            }
            last = $link;
          }
        }
      }
      return last;
    }
    $(window).on('scroll',function(evt) {
      let top = window.scrollY || window.pageYOffset;
      let height = $affixmenu.outerHeight();
      let max_bottom = $container.offset().top + $container.outerHeight();
      let bottom = top + height + 40;
      if(top > HEADWRAP_STYLE_LIMIT) {
        $affixmenu.addClass("fixed");
        fixedmenu = true;
      } else {
        if(fixedmenu) {
          if( top < HEADWRAP_STYLE_LIMIT) {
            $affixmenu.removeClass("fixed");
            fixedmenu = false;
          } else if (bottom > max_bottom) {
            $affixmenu.css('top',(max_bottom - height) - top);
          } else {
            $affixmenu.css('top',0);
          }
        }
      }
      var $current = getClosestHeader(top);
      if(current !== $current) {
        $affixmenu.find('.active').removeClass('active');
        $current.addClass('active');
        current = $current;
      }
    })
  })
 
})
