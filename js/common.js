head.ready(function() {
	$('.js-togglesitemap').click(function(event) {
		event.preventDefault();
		$('.footer__cat').toggleClass('is-active');
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('.dropdown').length) {
	        if($('.dropdown').is(":visible")) {
	            $('.dropdown').removeClass('is-visible');
	            $('.head__more').removeClass('is-active');
	        }
	    }        
	})
	$(window).load(function() {
		$('.article__slideshow .js-cycle').css('overflow','hidden').cycle({
			fx: 'scrollHorz',
		    speed: 600,
		    timeout: 0,
		    slides:"> .article__slide",
		    prev: '.article__prev',
		    next: '.article__next',
		    manualSpeed: 600,
		    autoHeight: "container"
		});



	});
	
	// touch js
	// uncomment on production
	//if(head.touch){
		$('.nav__show').click(function(event) {
			$('.nav').toggleClass('is-active')
		});
	//}

	$('.head__drop').click(function(event) {
		$(this).toggleClass('is-active');
		$('.dropdown').toggleClass('is-visible');
		return false;
	});

	if(head.touch) {
		$('.currency').click(function(event) {
			event.preventDefault();
			$(this).toggleClass('is-active');
		});
	};

	// scroll btns
	$(".sw__btn-left").click(function () {
		var leftPos = $('.sw').scrollLeft();
		$(".sw").animate({scrollLeft: leftPos - 200}, 800);
		return false;
	});

	$(".sw__btn-right").click(function () {
		var leftPos = $('.sw').scrollLeft();
		$(".sw").animate({scrollLeft: leftPos + 200}, 800);
		return false;
	});

	$('.sw').scroll(function(){
		var leftPos = $(this).scrollLeft();
		if (leftPos==0){
			$('.sw__btns').addClass('is-showright');
		}
		else{
			$('.sw__btns').removeClass('is-showright');
		};
		// alert($(this).width()+'---'+leftPos);
		if(leftPos+$(this).width() >579){
			$('.sw__btns').addClass('is-showleft');
		}
		else{
			$('.sw__btns').removeClass('is-showleft');
		}
	});

	// fancybox gallery popup
	$(".fancybox").fancybox({
		 beforeLoad: function() {
		 	var caption	= $(this.element).attr('caption'),
		 		 author = $(this.element).attr('author');

			if ( author == undefined ) {
				author = '';
			};

			this.title = caption + '<i>' + author + '</i>';
		},
		openEffect : 'fade',
		closeEffect : 'fade',
		prevEffect : 'elastic',
		nextEffect : 'elastic',
		padding : [20, 35, 20, 35],
		helpers : {
			  title : { type: 'inside' },
			overlay : { css : {'background' : 'rgba(255, 255, 255, 0.9)'}, locked: false }
			}

	});

	// $(".js-cycle").each(function(){
	// 	var heights = $(this).find(".js-cycle-slide").map(function(){
 //    	    return $(this).height();
 //    	}).get();
 //    	maxHeight = Math.max.apply(null, heights);
 //    	$(this).css({
 //    		height: maxHeight
 //    	});
	// });
	

});


