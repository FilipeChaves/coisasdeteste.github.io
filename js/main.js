function conceptClick()
{
	removeCenter(0);
	removeActives();
	
	$('div.concept').addClass('concept-active');
	fadeout();
}

function locationClick()
{
	removeCenter(1);
	removeActives();
	
	$('div.location').addClass('location-active');
	fadeout();
}

function galleryClick()
{
	removeCenter(2);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
}

function informationClick()
{
	removeCenter(3);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
}

function programClick()
{
	removeCenter(4);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
}
function ticketsClick()
{
	removeCenter(5);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
}

function removeCenter(nextID){
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-edition',
						 'div.titulo-gallery',
						 'div.titulo-information',
						 'div.titulo-program',
						 'div.titulo-tickets'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-edition',
						'div.textArea-gallery',
						'div.textArea-information',
						'div.textArea-program',
						'div.textArea-tickets']; 
						
	if($('img.grow').length === 0){
		for(var allIdx = 0; allIdx < allTextAreas.length; allIdx++){
			$(allTextAreas[allIdx]).css('display', 'inline-block');
			$(allTitleAreas[allIdx]).css('display', 'inline-block');
		}
	}
	
	for(var i = 0; i < allTextAreas.length; i++){
		if(nextID === i){
			$(allTextAreas[i]).css('opacity', '100');
			$(allTitleAreas[i]).css('opacity', '100');
			
			continue;
		}
		
			$(allTextAreas[i]).css('opacity', '0');
			$(allTitleAreas[i]).css('opacity', '0');
		
		
	}

}

function removeStyles(){
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-edition',
						 'div.titulo-gallery',
						 'div.titulo-information',
						 'div.titulo-program',
						 'div.titulo-tickets'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-edition',
						'div.textArea-gallery',
						'div.textArea-information',
						'div.textArea-program',
						'div.textArea-tickets']; 
	for(var allIdx = 0; allIdx < allTextAreas.length; allIdx++){
			$(allTextAreas[allIdx]).removeAttr("style");
			$(allTitleAreas[allIdx]).removeAttr("style");
		}
}

function removeActives(){
	$('div.concept').removeClass('concept-active');
	$('div.location').removeClass('location-active');
	$('div.gallery').removeClass('gallery-active');
	$('div.information').removeClass('information-active');
	$('div.program').removeClass('program-active');
	$('div.tickets').removeClass('tickets-active');
}

function fadeout(){
	//$('img').scale(2,2);
	if($('img.grow').length === 0){
		$('img.mandala').addClass("grow");
		$('img.arvore').addClass("turnTransparent");
		$('h3.titulo-concept').fadeIn(1000, "linear");
		$('div.textArea-concept').fadeIn(1000, "linear");
		$('div.conceptSymbol, div.locationSymbol, div.gallerySymbol').addClass('goLeft');
		$('div.informationSymbol, div.programSymbol, div.ticketsSymbol').addClass('goRight');
		//$('img.arvore').fadeOut(2500, "linear");
		$('#clickMe').fadeOut();
	}
};

function resizeImg (img)
{
        var resize = 150; // resize amount in percentage
        var origH  = 1920;  // original image height
        var origW  = 1080; // original image width
        var mouseX = event.x;
        var mouseY = event.y;
        var newH   = origH * (resize / 100);
        var newW   = origW * (resize / 100);

        // Set the new width and height
        img.style.height = newH;
        img.style.width  = newW;

        var c = img.parentNode;

        // Work out the new center
        c.scrollLeft = (mouseX * (resize / 100)) - (newW / 2) / 2;
        c.scrollTop  = (mouseY * (resize / 100)) - (newH / 2) / 2;
}

function onLoadedPage(){
	$('div.concept').on({
		'mouseover': function() {
			$('div.conceptSymbol').addClass('conceptSymbolHover');
		},
		'mouseout': function() {
			$('div.conceptSymbol').removeClass('conceptSymbolHover');
		}
	});

	$('div.conceptSymbol').on({
		'mouseover': function() {
			$('div.concept').addClass('conceptHover');
		},
		'mouseout': function() {
			$('div.concept').removeClass('conceptHover');
		}
	});

	$('div.information').on({
		'mouseover': function() {
			$('div.informationSymbol').addClass('informationSymbolHover');
		},
		'mouseout': function() {
			$('div.informationSymbol').removeClass('informationSymbolHover');
		}
	});

	$('div.informationSymbol').on({
		'mouseover': function() {
			$('div.information').addClass('informationHover');
		},
		'mouseout': function() {
			$('div.information').removeClass('informationHover');
		}
	});

	$('div.gallery').on({
		'mouseover': function() {
			$('div.gallerySymbol').addClass('gallerySymbolHover');
		},
		'mouseout': function() {
			$('div.gallerySymbol').removeClass('gallerySymbolHover');
		}
	});

	$('div.gallerySymbol').on({
		'mouseover': function() {
			$('div.gallery').addClass('galleryHover');
		},
		'mouseout': function() {
			$('div.gallery').removeClass('galleryHover');
		}
	});

	$('div.location').on({
		'mouseover': function() {
			$('div.locationSymbol').addClass('locationSymbolHover');
		},
		'mouseout': function() {
			$('div.locationSymbol').removeClass('locationSymbolHover');
		}
	});

	$('div.locationSymbol').on({
		'mouseover': function() {
			$('div.location').addClass('locationHover');
		},
		'mouseout': function() {
			$('div.location').removeClass('locationHover');
		}
	});

	$('div.program').on({
		'mouseover': function() {
			$('div.programSymbol').addClass('programSymbolHover');
		},
		'mouseout': function() {
			$('div.programSymbol').removeClass('programSymbolHover');
		}
	});

	$('div.programSymbol').on({
		'mouseover': function() {
			$('div.program').addClass('programHover');
		},
		'mouseout': function() {
			$('div.program').removeClass('programHover');
		}
	});

	$('div.tickets').on({
		'mouseover': function() {
			$('div.ticketsSymbol').addClass('ticketsSymbolHover');
		},
		'mouseout': function() {
			$('div.ticketsSymbol').removeClass('ticketsSymbolHover');
		}
	});

	$('div.ticketsSymbol').on({
		'mouseover': function() {
			$('div.tickets').addClass('ticketsHover');
		},
		'mouseout': function() {
			$('div.tickets').removeClass('ticketsHover');
		}
	});
	
	var nicesx = $("div.textArea-concept").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-program").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	//.cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar

}