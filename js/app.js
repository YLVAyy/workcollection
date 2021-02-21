(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".home-slider").flexslider({
			directionNav: false,
			controlNav: true
		});

		initLightbox({
	    	selector : '.filterable-item a',
	    	overlay: true,
	    	closeButton: true,
	    	arrow: true
	    });

		$('.map').gmap3({
			map: {
				options: {
					maxZoom: 14 
				}  
			},
			marker:{
				address: "40 Sibley St, Detroit",
			}
		},
		"autofit" );
	});

	$(window).load(function(){
		if(window.location.href.split("?")[1])
		{
			var category = window.location.href.split("?")[1].split("=")[1];
			if(category)
			{
				select = document.getElementById(category);
				if(select)
				{
					select.click();
				}
			}else
			{
				startselector = document.getElementById("painting");
				if(startselector)
				{
					startselector.click();
				}
			}
		}
	});

})(jQuery, document, window);