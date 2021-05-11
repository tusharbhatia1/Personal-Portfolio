								/////// Back to top /////////


jQuery("#backtotop").click(function(){
	jQuery("body,html").animate({
		scrollTop:0
	},3000);
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 150)
		{
			jQuery("#backtotop").addClass("visible");
		}
	else
	{
		jQuery("#backtotop").removeClass("visible");	
	}
});


	
									////////Loader////////


$(window).on('load', function(){
	setTimeout(function(){
		$(".preloader").fadeOut('slow');
	},2000);
});

									/////////Smooth Scrolling//////
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });