function conceptClick()
{
	removeCenter(0);
	removeActives();
	
	$('img.concept').addClass('concept-active');
	fadeout();
}

function editionClick()
{
	removeCenter(1);
	removeActives();
	
	$('img.edition').addClass('edition-active');
	fadeout();
}

function galleryClick()
{
	removeCenter(2);
	removeActives();
	
	$('img.gallery').addClass('gallery-active');
	fadeout();
}

function informationClick()
{
	removeCenter(3);
	removeActives();
	
	$('img.information').addClass('information-active');
	fadeout();
}

function programClick()
{
	removeCenter(4);
	removeActives();
	
	$('img.program').addClass('program-active');
	fadeout();
}
function ticketsClick()
{
	removeCenter(5);
	removeActives();
	
	$('img.tickets').addClass('tickets-active');
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
						
	for(var i = 0; i < allTextAreas.length; i++){
		if(nextID === i){
			$(allTextAreas[i]).removeClass('textToLeft');
			$(allTitleAreas[i]).removeClass('textToLeft');
			$(allTextAreas[i]).removeClass('textToRight');
			$(allTitleAreas[i]).removeClass('textToRight');
			$(allTextAreas[i]).addClass('textToCenter');
			$(allTitleAreas[i]).addClass('textToCenter');
			continue;
		}
		
		$(allTextAreas[i]).removeClass('textToCenter');
		$(allTitleAreas[i]).removeClass('textToCenter');
		$(allTextAreas[i]).removeClass('textToLeft');
		$(allTitleAreas[i]).removeClass('textToLeft');
		$(allTextAreas[i]).removeClass('textToRight');
		$(allTitleAreas[i]).removeClass('textToRight');
		
		if(nextID > i){
			$(allTextAreas[i]).addClass('textToLeft');
			$(allTitleAreas[i]).addClass('textToLeft');
		}
		else{
			$(allTextAreas[i]).addClass('textToRight');
			$(allTitleAreas[i]).addClass('textToRight');
		}
		
	}
}

function removeActives(){
	$('img.concept').removeClass('concept-active');
	$('img.edition').removeClass('edition-active');
	$('img.gallery').removeClass('gallery-active');
	$('img.information').removeClass('information-active');
	$('img.program').removeClass('program-active');
	$('img.tickets').removeClass('tickets-active');
}

function fadeout(){
	//$('img').scale(2,2);
	if($('img.grow').length === 0){
		$('img.mandala').addClass("grow");
		$('img.arvore').addClass("turnTransparent");
		$('h3.titulo-concept').fadeIn(1000, "linear");
		$('div.textArea-concept').fadeIn(1000, "linear");
		$('div.conceptSymbol, div.editionSymbol, div.gallerySymbol').addClass('goLeft');
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
	$('img.concept').on({
		'mouseover': function() {
			$('div.conceptSymbol').addClass('conceptSymbolHover');
		},
		'mouseout': function() {
			$('div.conceptSymbol').removeClass('conceptSymbolHover');
		}
	});

	$('div.conceptSymbol').on({
		'mouseover': function() {
			$('img.concept').addClass('conceptHover');
		},
		'mouseout': function() {
			$('img.concept').removeClass('conceptHover');
		}
	});

	$('img.information').on({
		'mouseover': function() {
			$('div.informationSymbol').addClass('informationSymbolHover');
		},
		'mouseout': function() {
			$('div.informationSymbol').removeClass('informationSymbolHover');
		}
	});

	$('div.informationSymbol').on({
		'mouseover': function() {
			$('img.information').addClass('informationHover');
		},
		'mouseout': function() {
			$('img.information').removeClass('informationHover');
		}
	});

	$('img.gallery').on({
		'mouseover': function() {
			$('div.gallerySymbol').addClass('gallerySymbolHover');
		},
		'mouseout': function() {
			$('div.gallerySymbol').removeClass('gallerySymbolHover');
		}
	});

	$('div.gallerySymbol').on({
		'mouseover': function() {
			$('img.gallery').addClass('galleryHover');
		},
		'mouseout': function() {
			$('img.gallery').removeClass('galleryHover');
		}
	});

	$('img.edition').on({
		'mouseover': function() {
			$('div.editionSymbol').addClass('editionSymbolHover');
		},
		'mouseout': function() {
			$('div.editionSymbol').removeClass('editionSymbolHover');
		}
	});

	$('div.editionSymbol').on({
		'mouseover': function() {
			$('img.edition').addClass('editionHover');
		},
		'mouseout': function() {
			$('img.edition').removeClass('editionHover');
		}
	});

	$('img.program').on({
		'mouseover': function() {
			$('div.programSymbol').addClass('programSymbolHover');
		},
		'mouseout': function() {
			$('div.programSymbol').removeClass('programSymbolHover');
		}
	});

	$('div.programSymbol').on({
		'mouseover': function() {
			$('img.program').addClass('programHover');
		},
		'mouseout': function() {
			$('img.program').removeClass('programHover');
		}
	});

	$('img.tickets').on({
		'mouseover': function() {
			$('div.ticketsSymbol').addClass('ticketsSymbolHover');
		},
		'mouseout': function() {
			$('div.ticketsSymbol').removeClass('ticketsSymbolHover');
		}
	});

	$('div.ticketsSymbol').on({
		'mouseover': function() {
			$('img.tickets').addClass('ticketsHover');
		},
		'mouseout': function() {
			$('img.tickets').removeClass('ticketsHover');
		}
	});
	
	var nicesx = $("div.textArea-concept").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-program").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	//.cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar

}