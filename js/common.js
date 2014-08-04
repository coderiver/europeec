head.ready(function() {
	
	if(head.touch) {
		$('.currency').click(function(event) {
			event.preventDefault();
			$(this).toggleClass('is-active');
		});
	}
	

	// touch js
	// uncomment on production
	//if(head.touch){
		$('.nav__show').click(function(event) {
			$('.nav').toggleClass('is-active')
		});
	//}
});