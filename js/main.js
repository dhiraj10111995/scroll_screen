$(document).ready(function(){

	TweenMax.set(['.anim-00 img, .phone-screen_anim-02'], {autoAlpha: 1});
	

	function getMobileSlide01Tl(){
		var mobileSlide01Tl = new TimelineMax();

		return mobileSlide01Tl;

	}

	function getMobileSlide02Tl(){
		var mobileSlide02Tl = new TimelineMax();

		mobileSlide02Tl
				    .to('.phone-floater_wrapper', 1, {x:-470,rotation:90})
					.to('.phone-screen_anim-03', 1, {autoAlpha: 1}, "-=1");;


			return mobileSlide02Tl;

	}					
	

	function getMobileSlide03Tl(){
		var mobileSlide03Tl = new TimelineMax();

		mobileSlide03Tl
			.to('.phone-floater_wrapper', 1, {x:0, rotation:0})
			.to('.phone-screen_anim-04', 1, {autoAlpha: 1}, "-=1")

			

		return mobileSlide03Tl;

	}		
	
	enquire.register("screen and (min-width: 769px)", {

		match: function(){

			initScrollMagic();

		},
		unmatch: function(){

			controller.destroy(true);
			$('*').removeAttr('style');

		}

	})

	function initScrollMagic(){

		// Init ScrollMagic
		controller = new ScrollMagic.Controller();


		// Pin Mobile Screen
		var pinMobile = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			duration: '1600'
		})
		.setPin('#phone-floater-container .pin-wrapper', {pushFollowers: false})
		.addIndicators()
		.addTo(controller);

		// Pin Mobile Scene 1
		// var pinScene01 = new ScrollMagic.Scene({
		// 	triggerElement: '#phone-floater-container',
		// 	triggerHook: 0,
		// 	duration: '0'
		// })
		// .setTween(getMobileSlide01Tl())
		// .addIndicators()
		// .addTo(controller);

		// Pin Mobile Scene 2
		var pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			offset: 450,
			duration: '0'
		})
		.setTween(getMobileSlide02Tl())
		.addIndicators()
		.addTo(controller);


		// Pin Mobile Scene 3
		var pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			offset: 1250,
			duration: '0'
		})
		.setTween(getMobileSlide03Tl())
		.addIndicators()
		.addTo(controller);

	}


});
