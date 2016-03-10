// JavaScript Document
jQuery(document).ready(function($){
	"use strict";

	if($('#form_contact').length){
		$('#form_contact').validate();
	}
	
	if($('#reserve_form').length){
		$('#reserve_form').validate();
	}
	
	//Datepicker Script
	var date_picker_CP = $('#dp3');
	if(date_picker_CP.length){
		$('#dp3').datepicker({
			format: 'mm-dd-yyyy'
		});
	}
	
	if($('#jquery_jplayer_2').length){
	// Music Player Start
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer_2",
			cssSelectorAncestor: "#jp_container_2"
		}, [
			{
				title:"No Body",
				artist:"Pixar",
				free:true,
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
			},
			{
				title:"Finding Nemo Teaser",
				artist:"Pixar",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
				},
			{
				title:"Incredibles Teaser",
				artist:"Pixar",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
				},
				
				{
				title:"Incredibles Teaser",
				artist:"Pixar",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				poster:"http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
				}
				
				
		], {
			swfPath: "../js",
			supplied: "mp3",
			smoothPlayBar: true,
			keyEnabled: true
		});
	// Music Player End
	}


	// Nav Bar Dropdown on mouseover
	$(".navbar-inner ul >li").hover(
		function() {
			$(this).addClass('open');
		},
		function() {
			$(this).removeClass('open');
		}
	);
	
	//Mian Image Slider
	if($('.img-slider').length){
		$('.img-slider').bxSlider({
			auto: true,
			autoControls: false
		});
	}
	
	//Mian DJ Image Slider
	if($('.dj-slider').length){
		$('.dj-slider').bxSlider({
			auto: true,
			autoControls: false
		});
	}
	
	//Top News Slider
	if($('.news-slider').length){
		$('.news-slider').bxSlider({
			auto: true,
			controls: false,
		});
	}
	
	//Booking Slider
	if($('.bslider').length){
		$('.bslider').bxSlider({
			auto: true,
			autoControls: false
		});
	}
	
	// Upcomming Slider Start
	if($('.upc-events').length){
	  $('.upc-events').bxSlider({
		slideWidth: 5000,
		minSlides: 2,
		maxSlides: 4,
		slideMargin: 40,
	  });
	}
	
	// Video Slider
	if($('.videoslider').length){
		$('.videoslider').bxSlider({
		pagerCustom: '#bx-pager',
		video: true,
		useCSS: false,
		autoControls: false
		});
	}
	
	// Tabs
	if($('#myTab a').length){
		$('#myTab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})

		$('#top-tabs a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});
	}

	// Fan Area Scroll Start
	if($('#fan-scroll').length){
		$("#fan-scroll").mCustomScrollbar({
			horizontalScroll:true
		});
		$(".fans-scroll.inner").mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	}
	// Fan Area Scroll End

//According
	$('.acc_container').hide(); //Hide/close all containers
	$('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
	
	//On Click
	$('.acc_trigger').click(function(){
		if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
			$('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
			$(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
		}
		return false; //Prevent the browser jump to the link anchor
	});//According end

	if($('#home_nl').length){
		// Counter Script Start
		var austDay = new Date();
		austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
		$('#defaultCountdown').countdown({until: austDay});
		$('#year').text(austDay.getFullYear());
	}

	if($('#event_list').length){
		var austDay = new Date();
		austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
		$('#defaultCountdown-1').countdown({until: austDay});
		$('#defaultCountdown-2').countdown({until: austDay});
		$('#defaultCountdown-3').countdown({until: austDay});
		$('#defaultCountdown-4').countdown({until: austDay});				
		$('#year').text(austDay.getFullYear());
	}
	// Counter Script End

	// Music Player Start
	if($('#jquery_jplayer_1').length){		
		$("#jquery_jplayer_1").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
					mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3"
				});
			},
			swfPath: "../js",
			supplied: "mp3",
			wmode: "window",
			smoothPlayBar: true,
			keyEnabled: true
		});
	}
	// Music Player End

	// Gallery page slider
	if($('.portfolio-slider').length){
			//Mian DJ Image Slider
			$('.portfolio-slider').bxSlider({
				auto: true,
				autoControls: false
			});
		}
	// Gallery page slider End


	// according
	if($('.accordion-group').length){
		$('.accordion-group').on('show',
		  function(e){
			$(this).find('.accordion-heading').addClass('active') ;
			$(this).find('.accordion-toggle').find('i').remove();
			$(this).find('.accordion-toggle').find('.pull-right').html('<i class="icon-minus"></i>');
			
		  }
		)

		$('.accordion-group').on('hide',
		  function(e){
			$(this).find('.accordion-heading').removeClass('active') ;
			$(this).find('.accordion-toggle').find('i').remove();
			$(this).find('.accordion-toggle').find('.pull-right').html('<i class="icon-plus"></i>');
		  }
		)
	}
	// according End
	
	
	
		// CS Sliding
	if($('.cs-slider').length){
	  $('.cs-slider').bxSlider({
		slideWidth: 2000,
		minSlides: 7,
		maxSlides: 7,
		slideMargin:5,
	  });
	}	
	
	//Trigger on Load
	$('#down_album').show();
	$('#up_album').hide();	
	
	//Toggle Function for Album on Slider
	$('.mp-toggle span').click(function(){
		var current_id = $(this).parent().attr('id');
		if(current_id == 'active-album'){
			$(this).parent().attr('id','no-active-album');
			$(this).parent().parent().find('#playlist-icon').hide();
			$(this).parent().parent().find('#mp_content_wrapper').hide();
			$(this).parent().parent().addClass('minimize');
			$(this).parent().parent().animate({height:"203px"},1000,
			function(){
				$(this).find('#up_album').show();
				$(this).find('#down_album').hide();
			});
		}else if(current_id =='no-active-album'){
			$(this).parent().attr('id','active-album');
			$(this).parent().parent().find('#playlist-icon').show();
			$(this).parent().parent().find('#mp_content_wrapper').show();
			$(this).parent().parent().removeClass('minimize');
			$(this).parent().parent().animate({height:"485px"},1000,
			function(){
				$(this).find('#up_album').hide();
				$(this).find('#down_album').show();
			});
		}
	});
		
	$("a.btn_playlist").click(function () {
		//Active Class
		if($(this).attr('id') == 'active'){
			$(this).parent().parent().parent().find('.mp_songs').slideDown();
			$(this).parent().parent().parent().find('.mp_content').children('img').css({"z-index":99});
			//var dd = $(this).parent().parent().parent().find('.mp_songs').html();		
			$(this).attr('id','no-active');
		}else{
			$(this).parent().parent().parent().find('.mp_songs').slideUp();
			//$(this).parent().parent().parent().find('.mp_content').children('img').slideDown();
			$(this).attr('id','active');
		}
	});


});