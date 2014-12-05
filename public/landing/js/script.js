/**
 * The script is encapsulated in an self-executing anonymous function,
 * to avoid conflicts with other libraries
 */
(function($) {
	/**
	 * Declare 'use strict' to the more restrictive code and a bit safer,
	 * sparing future problems
	 */
	"use strict";

	/***********************************************************************/
	/*****************************  $Content  ******************************/
	/**
	* + Content
	* + Collapse Icon
	* + Donations Steps
	* + Flickr Feed
	* + GMaps
	* + Owl Carousel - Gallery
	* + Fancybox
	* + Select Amount
	* + Send Forms
	* + Slider Range
	* + Slider Revolution
	* + Tabs
	* + Tootips

	*/

	/***************************  $Collapse Icon  **************************/
	function changeIcon(e, icons){
		var $emt = $(e.target).parents('.panel'),
			$ico = $emt.find('h4 a i'),
			evt = e.type,
			isIn = ($emt.find('.panel-collapse').hasClass('in')),
			icoClosed = icons[0],	//icon when panel is close
			icoOpen   = icons[1],	//icon when panel is open
			icoHover  = icons[2];			//icon when panel is hover

		$ico.removeClass();
		
		if (evt == 'show'){ 				$ico.addClass(icoOpen);
		} else if (evt == 'hide'){ 			$ico.addClass(icoClosed);
		} else if (evt == 'mouseenter'){ 	$ico.addClass(icoHover);
		} else if (evt == 'mouseleave'){ 
			( isIn )? $ico.addClass(icoOpen) : $ico.addClass(icoClosed);
		}
	}

	function bindChangeIcon(collapse, heading, icons){
		collapse.on('hide.bs.collapse', function (e){ changeIcon(e, icons); });
		collapse.on('show.bs.collapse', function (e){ changeIcon(e, icons); });
		heading.on('mouseenter', function (e){ changeIcon(e, icons); });
		heading.on('mouseleave', function (e){ changeIcon(e, icons); });
	}

	var $collapse = $('#accordion-work'),
		$heading = $collapse.find('.panel-heading'),
		icons = ['icon-down-circled', 'icon-up-circled', 'icon-down-circled'];
	
	bindChangeIcon($collapse, $heading, icons);



	/**************************  $Donations Steps  *************************/
	$('.btn-tab-action').click(function(e){
		e.preventDefault()
		$('#donation-steps a[href="' + $(this).attr('href') + '"]').tab('show')
	})
	


	/***************************  $Flickr Feed  ****************************/
	if ($('.flickr-feed').length) {
		$('.flickr-feed').jflickrfeed({
			limit: 8,
			qstrings: {
				id: '52617155@N08'
			},
			itemTemplate: '												\
				<li>													\
					<div class="item-thumbnail">						\
						<img src="{{image_s}}" alt="//">				\
						<span class="overthumb"></span>					\
						<div class="icons">								\
							<a href="{{link}}" target="_blank">			\
								<i class="icon-link"></i>				\
							</a>										\
						</div>											\
					</div>												\
				</li>'
		});
	}



	/*****************************  $GMaps  ********************************/
	if ($('#map').length) {
		var map = new GMaps({ 
			div: '#map', 
			lat: 48.860093, 
			lng: 2.294694,
			disableDefaultUI: true,
		});
		
		map.addMarker({ 
			lat: 48.858093,
			lng: 2.294694
		});
	}



	/**********************  $Owl Carousel - Gallery  **********************/
	$("#owl-gallery").owlCarousel({
		items: 4,
		slideSpeed: 300,
		paginationSpeed: 400,
	});

	/****************************  $Fancybox  *******************************/
	if ($('.fancybox').length) {
		$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
		
		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}

	/***************************  $Menu Sticky  ****************************/
	if($(window).height() > 600 && $(window).width() > 500){
		
	$(window).scroll(function() {
		var $head = $('body > header'),
			$navbar = $head.find('.navbar'),
			offset = 250,
			height = $navbar.height() + offset;

		if( $(window).scrollTop() >= height && !$navbar.hasClass('navbar-fixed-top') ) {
			
			$navbar.css('top', -150);
			$navbar.addClass('navbar-fixed-top');
			$navbar.animate( { 'top': 0}, 300 );

		} else if ( $(window).scrollTop() < height && $navbar.hasClass('navbar-fixed-top') ) {
			$navbar.removeClass('navbar-fixed-top')
		}

	});

	}


	/*************************  $One Page Scroll  **************************/
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		filter: ':not(.exclude)',
	});



	/***************************  $Select Amount  **************************/
	$('.amount .radio').click(function (e) {
		var val = $('[name=amount]:checked').val();

		$('.amount .radio').removeClass('active');
		$(this).addClass('active');
		
		if (val == 'other') {
			$('#amount-other').show()
		} else {
			$('#amount-other').hide()

		}
	});



	/**************************  $Send Forms  ******************************/
	var $form = $('form');

	$form.on( 'submit' , function(e){ 
		if ( $(this).data('ajax') == 1 ) {
			e.preventDefault();
			sendForm( $(this) );
		} 
	})

	function sendForm($form){
		var fieldsData = getFieldsData($form),
			url = $form.attr('action'),
			method = $form.attr('method');

		sendData(url, method, fieldsData, $form, showResults)
	}

	
	function getFieldsData($form) {
		var $fields = $form.find('input, button, textarea, select'),
			fieldsData = {};

		$fields.each( function(){
			var name = $(this).attr('name'),
				val  = $(this).val(),
				type = $(this).attr('type');

			if ( typeof name !== 'undefined' ){
				
				if 	( type == 'checkbox' || type == 'radio' ){

					if ( $(this).is(':checked') ){
						fieldsData[name] = val;
					}
				} else {
					fieldsData[name] = val;
				}
					
			}
		});

		return fieldsData
	}

	function sendData(url, method, data, $form, callback){
		var $btn = $form.find('[type=submit]'),
			$response = $form.find('.form-response');

		$.ajax({
			beforeSend: function(objeto){ 
				$response.html('');
			},
			complete: function(objeto, exito){ },
			data: data,
			success: function(dat){  callback(dat, $response); },
			type: method,
			url: url,
		});
	}

	function showResults(data, $response){
		 $response.html(data);
		 $response.find('.alert').slideDown('slow');
	}



	/***************************  $Slider Range  ***************************/
	if ($('#slider-price').length) { 
			initSliderRange(
				$('#slider-price .slider'),
				'$ ',
				'',
				1000,
				100000,
				1000,
				[25000,75000],
				'hide'
			) 
		}

	function initSliderRange(element, pre, app, min, max, step, val, tooltip) {
		element.slider({
				range: true,
				min: min,
				max: max,
				value : val,
				step: step,
				tooltip: tooltip,
			})
			.on('slide', function(ev){
				$(this).parent().parent().find('.input_range.min').val(ev.value[0])
				$(this).parent().parent().find('.span_range.min').html(pre + ev.value[0] + app)

				$(this).parent().parent().find('.input_range.max').val(ev.value[1])
				$(this).parent().parent().find('.span_range.max').html(pre + ev.value[1] + app)
			});
	}



	/***********************  $Slider Revolution  **************************/
	function startRevolution(){
		var $banner = $('#slider-revolution'),
			args = {};
		
		args = {
			startheight:880,
			startwidth:1500,
			
			fullWidth:"on",
			fullScreen:"off",

			shadow:0,

			onHoverStop: "on",

			hideThumbs:1,
			navigationType: "bullet",
			navigationHAlign: "center",
			navigationVAlign: "bottom"
		}

		if(jQuery().revolution) {
			$banner.revolution(args);
		}
	}

	$(document).ready(function() { startRevolution(); });



	/*******************************  $Tabs  *******************************/
	$('.nav-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})


	/*****************************  $Tootips  ******************************/
	function changeTooltipColorTo(color) {
		//solution from: http://stackoverflow.com/questions/12639708/modifying-twitter-bootstraps-tooltip-colors-based-on-position
		$('.tooltip-inner').css('background-color', color)
		$('.tooltip.top .tooltip-arrow').css('border-top-color', color);
		$('.tooltip.right .tooltip-arrow').css('border-right-color', color);
		$('.tooltip.left .tooltip-arrow').css('border-left-color', color);
		$('.tooltip.bottom .tooltip-arrow').css('border-bottom-color', color);
	}

	$('.donation-item .progress-bar').tooltip({placement: 'top'})
	$('.donation-item .progress-bar').hover(function() {changeTooltipColorTo('#d91d2b')});


})(jQuery);