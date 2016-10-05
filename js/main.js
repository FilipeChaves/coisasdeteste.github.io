function conceptClick()
{
	removeCenter(0);
	removeActives();
	
	$('div.concept').addClass('concept-active');
	fadeout();
}

function programClick()
{
	$('div.program').addClass('program-active');
	fadeout();
	
	removeCenter(1);
	removeActives();
}


function locationClick()
{
	$('div.location').addClass('location-active');
	fadeout();
	
	removeCenter(2);
	removeActives();
}

function informationClick()
{	
	$('div.information').addClass('information-active');
	fadeout();

	removeCenter(3);
	removeActives();
}

function galleryClick()
{
	$('div.gallery').addClass('gallery-active');
	fadeout();
	
	removeCenter(4);
	removeActives();
}

function ticketsClick()
{
	$('div.tickets').addClass('tickets-active');
	fadeout();
	
	removeCenter(5);
	removeActives();
}

function removeCenter(nextID) 
{
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-program',
						 'div.titulo-location',
						 'div.titulo-information',
						 'div.titulo-gallery',
						 'div.titulo-tickets'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets']; 
						
	for(var i = 0; i < allTextAreas.length; i++)
	{
		if(nextID === i)
		{
			$(allTextAreas[i]).css('display', 'inline-block');
			$(allTitleAreas[i]).css('display', 'inline-block');
						
			setTimeout(function() { 
				$(allTextAreas[nextID]).css('opacity', '100');
				$(allTitleAreas[nextID]).css('opacity', '100');
			}, 200)
			
			setTimeout(function() { 
				var allScrolls = $("div#ascrail200" + nextID);
				allScrolls.css("top", "18%");
				allScrolls.css("left", "87%");
			}, 1000)
			
			continue;
		}
		$(allTextAreas[i]).css('opacity', '0');
		$(allTitleAreas[i]).css('opacity', '0');
		var allScrolls = $("div#ascrail200" + i);
		allScrolls.css("top", "18%");
		allScrolls.css("left", "87%");
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
						 'div.titulo-tickets'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets']; 
	
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
		$('div.moonSymbol, div.sunSymbol').removeClass('turnTransparent');
		$('img.arvore').removeClass("turnTransparent");
		$('div.countdown').removeClass("turnTransparent");
		$("div.znaSymbol").removeAttr("style");
		$("div.znaSymbol").off('click');
		removeActives();
		removeCenter(-1);
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').removeClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').removeClass('goRight');
		
		$('div.dataText, div.localText').addClass("turnTransparent");
		countdown();
	}
}
function fadeout(){
	//$('img').scale(2,2);
	if($('img.grow').length === 0)
	{
		$("div.znaSymbol").addClass('turnToZNALogo');
		var countdownPosition = $('div.countdown').position();
		$("div.znaSymbol").css('top', countdownPosition.top);
		$("div.znaSymbol").css('left', countdownPosition.left + 10);
		$("div.znaSymbol").on('click', countdownClick);
		
		$('div.dataText, div.localText').removeClass("turnTransparent");
		$('div.moonSymbol, div.sunSymbol').addClass("turnTransparent");
		$('img.mandala').addClass("grow");
		$('img.arvore').addClass("turnTransparent");
		$('div.countdown').addClass("turnTransparent");
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').addClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').addClass('goRight');
		
		for(var i = 0; i < 6; i++){
			var allScrolls = $("div#ascrail200" + i);
			allScrolls.css("top", "18%");
			allScrolls.css("left", "87%");
		}
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
	
	var nicesx = $("div.textArea-concept").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-program").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-location").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-information").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-gallery").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-tickets").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	//.cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar
	
	countdown();
}

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
