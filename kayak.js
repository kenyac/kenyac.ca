$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});

$(document).ready(function(){
	var oneVW = $(window).width() / 100; //works
	var oneVH = $(window).height() / 100; //works
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$("#nav-icon1").toggleClass('slide');
		$("#mySidenav").toggleClass('slide');
	});	
	
	$(".dot").click(function(){
		var dots = $(".dot");
		var slides = $(".timeline-img");
		if(!($(this).hasClass("dotActive"))){
			for(var i = 0; i < dots.length; i++){
				if($(dots[i]).hasClass("dotActive")){
					$(dots[i]).removeClass("dotActive");
					$(this).addClass("dotActive");
					$(slides[i]).fadeOut()					
					$(".timeline-title").remove();
					$(".timeline-separator").remove();
					$(".timeline-text").remove();
					updateTimeline();
				}

				if($(this).is($(dots[i]))){
					$(slides[i]).fadeIn();
				}
			}
		}
	});
	
	$("#timeline").hover(
	function(){		
		updateTimeline();
	}, function(){
		$(".timeline-title").remove();
		$(".timeline-separator").remove();
		$(".timeline-text").remove();
	});
	
	function updateTimeline(){
		var dots = $(".dot");
		for(var i = 0; i < dots.length; i++){
				if($(dots[i]).hasClass("dotActive")){
					break;
				}
		}
		if(i == 0){
			$("#timeline").append('<h1 class="timeline-title">Queen\'s</h1>');
			$("#timeline").append('<span class="timeline-separator"></span>');
			$("#timeline").append('<p class="timeline-text">I\'m currently a third-year at Queen\'s University specializing in Computing and Mathematics.</p>');
		}
		else if(i == 1){
			$("#timeline").append('<h1 class="timeline-title">Lisgar CI</h1>');
			$("#timeline").append('<span class="timeline-separator"></span>');
			$("#timeline").append('<p class="timeline-text">I graduated Lisgar Collegiate Institute in April of 2016.</p>');
		}
		else if(i == 2){
			$("#timeline").append('<h1 class="timeline-title">Hoshuko</h1>');
			$("#timeline").append('<span class="timeline-separator"></span>');
			$("#timeline").append('<p class="timeline-text">I attended a private Japanese school from age 6 to 14, receiving a curriculum identical to the one used in Japan.</p>')
		}
	}
	
	$(".projectBox").hover(
	function(){
		if($(this).hasClass("p1")){
			$(this).append('<h2 class="projectTitle">Chess</h2>');
		}
		else if($(this).hasClass("p2")){
			$(this).append('<h2 class="projectTitle">VPN Frontend</h2>');
		}
		else if($(this).hasClass("p3")){
			$(this).append('<h2 class="projectTitle">N Queens</h2>');
		}
		else if($(this).hasClass("p4")){
			$(this).append('<h2 class="projectTitle">Coming Soon</h2>');
		}
	}, function(){
		$(".projectTitle").remove();	
	});
	
  $(".projectBox").click(function(){
    	console.log("oi");
    	if($(this).hasClass("p1")){
          window.open('https://github.com/kenyac/Chess','_blank');
		}
		else if($(this).hasClass("p2")){
          window.open('https://github.com/kenyac/D3Globe','_blank');
		}
		else if($(this).hasClass("p3")){
          window.open('https://github.com/kenyac/N-queens/tree/master','_blank');
		}
		else if($(this).hasClass("p4")){
		}
  });
});
