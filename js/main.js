function conceptClick()
{
	removeActives();
	$('img.concept').addClass('concept-active');
	fadeout();
}
function editionClick()
{
	removeActives();
	$('img.edition').addClass('edition-active');
	fadeout();
}
function galleryClick()
{
	removeActives();
	$('img.gallery').addClass('gallery-active');
	fadeout();
}
function informationClick()
{
	removeActives();
	$('img.information').addClass('information-active');
	fadeout();
}
function programClick()
{
	removeActives();
	$('img.program').addClass('program-active');
	fadeout();
}
function ticketsClick()
{
	removeActives();
	$('img.tickets').addClass('tickets-active');
	fadeout();
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
	
	$('img.mandala').addClass("grow");
	$('img.arvore').addClass("turnTransparent");
	
	$('img.mandala').fadeOut(1000, "linear");
	$('img.conceptSymbol, img.editionSymbol, img.gallerySymbol').addClass('goLeft');
	$('img.informationSymbol, img.programSymbol, img.ticketsSymbol').addClass('goRight');
	//$('img.arvore').fadeOut(2500, "linear");
	$('#clickMe').fadeOut();
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
			$('img.conceptSymbol').addClass('conceptSymbolHover');
		},
		'mouseout': function() {
			$('img.conceptSymbol').removeClass('conceptSymbolHover');
		}
	});

	$('img.conceptSymbol').on({
		'mouseover': function() {
			$('img.concept').addClass('conceptHover');
		},
		'mouseout': function() {
			$('img.concept').removeClass('conceptHover');
		}
	});

	$('img.information').on({
		'mouseover': function() {
			$('img.informationSymbol').addClass('informationSymbolHover');
		},
		'mouseout': function() {
			$('img.informationSymbol').removeClass('informationSymbolHover');
		}
	});

	$('img.informationSymbol').on({
		'mouseover': function() {
			$('img.information').addClass('informationHover');
		},
		'mouseout': function() {
			$('img.information').removeClass('informationHover');
		}
	});

	$('img.gallery').on({
		'mouseover': function() {
			$('img.gallerySymbol').addClass('gallerySymbolHover');
		},
		'mouseout': function() {
			$('img.gallerySymbol').removeClass('gallerySymbolHover');
		}
	});

	$('img.gallerySymbol').on({
		'mouseover': function() {
			$('img.gallery').addClass('galleryHover');
		},
		'mouseout': function() {
			$('img.gallery').removeClass('galleryHover');
		}
	});

	$('img.edition').on({
		'mouseover': function() {
			$('img.editionSymbol').addClass('editionSymbolHover');
		},
		'mouseout': function() {
			$('img.editionSymbol').removeClass('editionSymbolHover');
		}
	});

	$('img.editionSymbol').on({
		'mouseover': function() {
			$('img.edition').addClass('editionHover');
		},
		'mouseout': function() {
			$('img.edition').removeClass('editionHover');
		}
	});

	$('img.program').on({
		'mouseover': function() {
			$('img.programSymbol').addClass('programSymbolHover');
		},
		'mouseout': function() {
			$('img.programSymbol').removeClass('programSymbolHover');
		}
	});

	$('img.programSymbol').on({
		'mouseover': function() {
			$('img.program').addClass('programHover');
		},
		'mouseout': function() {
			$('img.program').removeClass('programHover');
		}
	});

	$('img.tickets').on({
		'mouseover': function() {
			$('img.ticketsSymbol').addClass('ticketsSymbolHover');
		},
		'mouseout': function() {
			$('img.ticketsSymbol').removeClass('ticketsSymbolHover');
		}
	});

	$('img.ticketsSymbol').on({
		'mouseover': function() {
			$('img.tickets').addClass('ticketsHover');
		},
		'mouseout': function() {
			$('img.tickets').removeClass('ticketsHover');
		}
	});
}