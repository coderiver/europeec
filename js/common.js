head.ready(function() {


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

	//gallery popup
	// $('.article__slideshow img').click(function() {
	// 	if ( $(window).width() > 700 ) {
	// 		$('.popup').fadeIn(200);
	// 		$('body').addClass('noscroll');
	// 	};
	// });

	// $('.popup__gallery-close').click(function() {
	// 	$('.popup').fadeOut(200);
	// 	$('body').removeClass('noscroll');
	// });

	$(".fancybox").fancybox({
		// afterLoad: function() {
		// 	$(this).title = $(this).title + '<span class="fancy-author">' + $(this).attr('data-autor') + '</span>';
		// },
		 beforeLoad: function() {
		 	var caption	= $(this.element).attr('caption'),
		 		 author = $(this.element).attr('author');

			this.title = caption + '<i>' + author + '</i>';
			if ( author == undefined ) {
				author = '';
			};
		},
		openEffect : 'fade',
		closeEffect : 'fade',
		prevEffect : 'elastic',
		nextEffect : 'elastic',
		padding : [20, 35, 20, 35],
		helpers : {
			  title : { type: 'inside' },
			overlay : { css : {'background' : 'rgba(0, 0, 0, 0.8)'} }
			}

	})

});


