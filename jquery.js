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