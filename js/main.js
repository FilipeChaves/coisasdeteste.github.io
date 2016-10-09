function conceptClick()
{
	removeCenter(0);
	removeActives();
	
	$('div.concept').addClass('concept-active');
	fadeout();
	window.history.pushState({"href":"concept"}, null, '#concept');
}

function programClick()
{
	removeCenter(1);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"program"}, null, '#program');
}


function locationClick()
{
	removeCenter(2);
	removeActives();
	
	$('div.location').addClass('location-active');
	fadeout();
	window.history.pushState({"href":"location"}, null, '#location');
}

function informationClick()
{
	removeCenter(3);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"information"}, null, '#information');
}

function galleryClick()
{
	removeCenter(4);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"location"}, null, '#location');
}

function ticketsClick()
{
	removeCenter(5);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"tickets"}, null, '#tickets');
}

function dancefloorClick()
{
	removeCenter(6);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"dancefloor"}, null, '#dancefloor');
}

function chilloutClick()
{
	removeCenter(7);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"chillout"}, null, '#chillout');
}

function goaClick()
{
	removeCenter(8);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"goa"}, null, '#goa');
}

function zenbuspaceClick()
{
	removeCenter(9);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"zenbuspace"}, null, '#zenbuspace');
}

function zambukidsClick()
{
	removeCenter(10);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"zambukids"}, null, '#zambukids');
}

function afterpartyClick()
{
	removeCenter(11);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"afterparty"}, null, '#afterparty');
}

function usefulClick()
{
	removeCenter(12);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"useful"}, null, '#useful');
}

function parkingCampingClick()
{
	removeCenter(13);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"parkingCamping"}, null, '#parkingCamping');
}

function participationClick()
{
	removeCenter(14);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"participation"}, null, '#participation');
}

function historyClick()
{
	removeCenter(15);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"history"}, null, '#history');
}

function removeCenter(nextID) 
{
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-program',
						 'div.titulo-location',
						 'div.titulo-information',
						 'div.titulo-gallery',
						 'div.titulo-tickets',
						 'div.titulo-dancefloor', 
						 'div.titulo-chillout',
						 'div.titulo-goa',
						 'div.titulo-zenbuspace',
						 'div.titulo-zambukids',
						 'div.titulo-afterparty',
						 'div.titulo-useful',
						 'div.titulo-parkingCamping',
						 'div.titulo-participation',
						 'div.titulo-history'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets',
						'div.textArea-dancefloor', 
						'div.textArea-chillout',
						'div.textArea-goa',
						'div.textArea-zenbuspace',
						'div.textArea-zambukids',
						'div.textArea-afterparty',
						'div.textArea-useful',
						'div.textArea-parkingCamping',
						'div.textArea-participation',
						'div.textArea-history'];
	
	var windowHeight = $(window).height();
	var countdownHeight = $('div.countdown').height();
	var titleHeight = $('div.titulo-concept').height();
	var menuSocialHeight = $('div.divMenuSocial').height();
	
	for(var i = 0; i < allTextAreas.length; i++)
	{
		if(nextID === i)
		{
			$('div.blackShadow').css('display', 'inline-block');
			$(allTextAreas[i]).css('display', 'inline-block');
			$(allTitleAreas[i]).css('display', 'inline-block');
		
			$(allTitleAreas[i]).css('top', countdownHeight + 40 + "px");
			$(allTextAreas[i]).css('top', countdownHeight + 40 + titleHeight + 25 + "px");
			$(allTextAreas[i]).css('height', (windowHeight - 85 - countdownHeight - titleHeight - menuSocialHeight) + "px");
			$('div.blackShadow').css('top', countdownHeight + 20 + "px");
			$('div.blackShadow').css('height', (windowHeight - 20 - countdownHeight - menuSocialHeight) + "px");
						
			setTimeout(function() { 
				$('div.blackShadow').css('opacity', '100');
				$(allTextAreas[nextID]).css('opacity', '100');
				$(allTitleAreas[nextID]).css('opacity', '100');
			}, 200);
			continue;
		}
		$(allTextAreas[i]).css('opacity', '0');
		$(allTitleAreas[i]).css('opacity', '0');
	}
	setTimeout(function() {
		removeDisplay(nextID);
	}, 1000)
}

function removeDisplay(nextID)
{
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-program',
						 'div.titulo-location',
						 'div.titulo-information',
						 'div.titulo-gallery',
						 'div.titulo-tickets',
						 'div.titulo-dancefloor', 
						 'div.titulo-chillout',
						 'div.titulo-goa',
						 'div.titulo-zenbuspace',
						 'div.titulo-zambukids',
						 'div.titulo-afterparty',
						 'div.titulo-useful',
						 'div.titulo-parkingCamping',
						 'div.titulo-participation',
						 'div.titulo-history'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets',
						'div.textArea-dancefloor', 
						'div.textArea-chillout',
						'div.textArea-goa',
						'div.textArea-zenbuspace',
						'div.textArea-zambukids',
						'div.textArea-afterparty',
						'div.textArea-useful',
						'div.textArea-parkingCamping',
						'div.textArea-participation',
						'div.textArea-history'];
	
	var contdownHeight = $('div.countdown').height();
	var titleHeight = $('div.titulo-concept').height();
	
	for(var allIdx = 0; allIdx < allTextAreas.length; allIdx++){
		if(nextID == allIdx)
			continue;
		$(allTextAreas[allIdx]).css('display', 'none');
		$(allTitleAreas[allIdx]).css('display', 'none');
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

function countdownClick()
{
	if($('img.grow').length === 1){
		$("div.znaSymbol").removeClass('turnToZNALogo');
		$('img.mandala').removeClass("grow");
		$('div.moonSymbol').removeClass('goDownRight grow');
		$('div.sunSymbol').removeClass('goDownLeft grow');
		$('img.arvore').removeClass("turnTransparent");
		$('div.countdown').removeClass("turnTransparent");
		$("div.znaSymbol").removeAttr("style");
		$("div.znaSymbol").off('click');
		$('div.blackShadow').css('opacity', '0');
		removeActives();
		removeCenter(-1);
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').removeClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').removeClass('goRight');
		
		$('div.dataText, div.localText').addClass("turnTransparent");
		countdown();
		window.history.pushState({"href":""}, null, '#');
	}
}

function fadeout(){
	if($('img.grow').length === 0)
	{
		$("div.znaSymbol").addClass('turnToZNALogo');
		var countdownPosition = $('div.countdown').position();
		$("div.znaSymbol").css('top', countdownPosition.top);
		$("div.znaSymbol").css('left', countdownPosition.left + 20);
		$("div.znaSymbol").on('click', countdownClick);
		
		$('div.dataText, div.localText').removeClass("turnTransparent");
		$('div.moonSymbol').addClass('goDownRight grow');
		$('div.sunSymbol').addClass('goDownLeft grow');
		$('img.mandala').addClass("grow");
		$('img.arvore').addClass("turnTransparent");
		$('div.countdown').addClass("turnTransparent");
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').addClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').addClass('goRight');
	}
};

function countdown(){
	if($('img.grow').length === 0){	
		var time = getTimeRemaining();
		$("div.countdown").text( (time.days < 10 ? "0" :"") + time.days+ "." + (time.hours < 10 ? "0" : "") + time.hours + ":" + 
								 (time.minutes < 10 ? "0" :"") + time.minutes + ":" + (time.seconds < 10 ? "0" :"") + time.seconds);
								 
		var milliseconds = 1000 - new Date().getMilliseconds();
		setTimeout(countdown, milliseconds);
	}
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
	
	$(window).resize(function() {
		if($('img.grow').length === 1)
		{
			var countdownPosition = $('div.countdown').position();
			$("div.znaSymbol").css('top', countdownPosition.top);
			$("div.znaSymbol").css('left', countdownPosition.left + 20);
		}
	});
	
	
	var nicesx = $("div.textArea-concept").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-program").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-location").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-information").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-gallery").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-tickets").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesx = $("div.textArea-chillout").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-dancefloor").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-goa").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-zenbuspace").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-zambukids").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-afterparty").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-useful").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-parkingCamping").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-participation").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-history").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	//.cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar
	
	if(isIE()){
		$("h3.titulo-concept, h3.titulo-program, h3.titulo-information, h3.titulo-gallery, h3.titulo-tickets, h3.titulo-location, h3.titulo-dancefloor, h3.titulo-chillout, h3.titulo-goa, h3.titulo-zenbuspace, h3.titulo-zambukids, h3.titulo-useful, h3.titulo-parkingCamping, h3.titulo-afterparty, h3.titulo-participation, h3.titulo-history")
	.css("font-size", "150%");
	}
	countdown();
	setTimeout( new function() {
		var thisRef = window.location.href;
		if(thisRef.includes("#")){
			var splittedUrl = thisRef.split('#');
			if(splittedUrl.length < 2)
				return;
			switch(splittedUrl[1]){
				case 'concept':
					conceptClick();
					break;
				case 'program':
					programClick();
					break;
				case 'location':
					locationClick();
					break;
				case 'information':
					informationClick();
					break;
				case 'gallery':
					galleryClick();
					break;
				case 'tickets':
					ticketsClick();
					break;
				case 'dancefloor':
					dancefloorClick();
					break;
				case 'chillout':
					chilloutClick();
					break;
				case 'goa':
					goaClick();
					break;
				case 'afterparty':
					afterpartyClick();
					break;
				case 'zenbuspace':
					zenbuspaceClick();
					break;
				case 'zambukids':
					zambukidsClick();
					break;
				case 'useful':
					usefulClick();
					break;
				case 'parkingCamping':
					parkingCampingClick();
					break;
				case 'participation':
					participationClick();
					break;
				case 'history':
					historyClick();
					break;
			}
		}else{
			window.history.pushState({"href":""}, null, '#');
		}
	}, 400);
}

window.onpopstate = function(event) {
	
	switch(event.state.href){
		case '':
			countdownClick();
			break;
		case 'concept':
			conceptClick();
			break;
		case 'program':
			programClick();
			break;
		case 'location':
			locationClick();
			break;
		case 'information':
			informationClick();
			break;
		case 'gallery':
			galleryClick();
			break;
		case 'tickets':
			ticketsClick();
			break;
		case 'dancefloor':
			dancefloorClick();
			break;
		case 'chillout':
			chilloutClick();
			break;
		case 'goa':
			goaClick();
			break;
		case 'afterparty':
			afterpartyClick();
			break;
		case 'zenbuspace':
			zenbuspaceClick();
			break;
		case 'zambukids':
			zambukidsClick();
			break;
		case 'useful':
			usefulClick();
			break;
		case 'parkingCamping':
			parkingCampingClick();
			break;
		case 'participation':
			participationClick();
			break;
		case 'history':
			historyClick();
			break;
	}
};

function getTimeRemaining(){
  var t = new Date(2017, 7, 22, 21, 0, 0, 0) - new Date();
  if(t < 0){
	  seconds = 0;
	  minutes = 0;
	  hours = 0;
	  days = 0;
  }
  else{
	  var seconds = Math.floor( (t/1000) % 60 );
	  var minutes = Math.floor( (t/1000/60) % 60 );
	  var hours = Math.floor( (t/(1000*60*60)) % 24 );
	  var days = Math.floor( t/(1000*60*60*24) );
  }
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return true;
    }

    // other browser
    return false;
}
