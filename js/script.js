
(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_header = $('.main-header .sticky-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 100) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}


	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:0,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}
	
	
	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1280:{
					items:4
				}
			}
		});    		
	}
	
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:32,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1280:{
					items:2
				}
			}
		});    		
	}
	
	
	// Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			animateOut: 'slideOutDown',
    		animateIn: 'fadeIn',
			loop:true,
			margin:30,
			nav:true,
			singleItem:true,
			smartSpeed: 500,
			autoHeight: false,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1280:{
					items:5
				}
			}
		});    		
	}
	
	
	//Product Tabs
	if($('.project-tab').length){
		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).hasClass('actve-tab')){
				return false;
			}else{
				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	//Product Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				},
				1400:{
					items:5
				}
			}
		});    		
	}
	
	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }
	 
	 //Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	
	//Time Picker
	if($('.timepicker').length){
		$('.timepicker').timepicker();
	}
	
	//Date Picker
	if($('.datepicker').length){
		$( '.datepicker' ).datepicker();
	}
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);


// Testmonial


$(document).ready(function() {
    // Initialize carousel
    $('#reviewCarousel').carousel();

    $('#reviewForm').submit(function(event) {
      event.preventDefault();

      const reviewerName = $('#reviewerName').val();
      const reviewerImage = $('#reviewerImage')[0].files[0];
      const reviewText = $('#reviewText').val();
      const rating = $('#rating').val();
console.log(reviewerName)
      // Clear form fields
      $('#reviewerName').val('');
      $('#reviewerImage').val('');
      $('#reviewText').val('');
      $('#rating').val('');

      const starsHTML = getStarsHTML(rating);

      const reviewHTML = `
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <img class="reviewer-image" src="${URL.createObjectURL(reviewerImage)}" alt="Reviewer Image">
              <h5 class="card-title">${reviewerName}</h5>
              <p class="card-text">${reviewText}</p>
              <p class="card-text">Rating: ${starsHTML}</p>
            </div>
          </div>
        </div>
      `;

      $('#reviewCarousel .carousel-inner').append(reviewHTML);

      // Save review to local storage
      saveReviewToLocalStorage(reviewerName, reviewerImage, reviewText, rating);

      // Update the carousel interval if there are more than one reviews
      if ($('#reviewCarousel .carousel-inner .carousel-item').length > 1) {
        $('#reviewCarousel').carousel('dispose'); // Remove current carousel settings
        $('#reviewCarousel').carousel({ interval: 5000 }); // Set interval to 5 seconds
        $('#reviewCarousel').carousel('next'); // Move to the next review
      }

      // Hide the form and show the carousel
      $('#formContainer').addClass('hidden');
      $('#reviewCarousel').removeClass('hidden');
    });

    function getStarsHTML(rating) {
      const filledStars = '<i class="fas fa-star"></i>'.repeat(rating);
      const emptyStars = '<i class="far fa-star"></i>'.repeat(5 - rating);
      return `${filledStars}${emptyStars}`;
    }

    function saveReviewToLocalStorage(reviewerName, reviewerImage, reviewText, rating) {
      const review = {
        reviewerName,
        reviewerImage,
        reviewText,
        rating,
        timestamp: Date.now()
      };
      const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(review);
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    $('#toggleFormButton').click(function() {
      $('#formContainer').toggleClass('hidden');
      $('#reviewCarousel').toggleClass('hidden');
    });

    // Load reviews from local storage
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    for (const review of reviews) {
      const starsHTML = getStarsHTML(review.rating);
      const reviewHTML = `
        <div class="carousel-item">
          <div class="card">
            <div class="card-body">
              <img class="reviewer-image" src="${review.reviewerImage}" alt="Reviewer Image">
              <h5 class="card-title">${review.reviewerName}</h5>
              <p class="card-text">${review.reviewText}</p>
              <p class="card-text">Rating: ${starsHTML}</p>
            </div>
          </div>
        </div>
      `;
      $('#reviewCarousel .carousel-inner').append(reviewHTML);
    }
    // Set the first review as active in the carousel
    $('#reviewCarousel .carousel-inner .carousel-item:first-child').addClass('active');
  });

// contact form

function sendMail() {
    var name = encodeURIComponent(document.getElementsByName("username")[0].value);
    var phone = encodeURIComponent(document.getElementsByName("phone")[0].value);
    var email = encodeURIComponent(document.getElementsByName("email")[0].value);
    var message = encodeURIComponent(document.getElementsByName("message")[0].value);

    var subject = "Contact Form Submission";
    var mailtoLink = "mailto:eyobel7k@gmail.com" +
        "?subject=" + subject +
        "&body=Name: " + name +
        "%0D%0APhone: " + phone +
        "%0D%0AEmail: " + email +
        "%0D%0AMessage: " + message;

    window.location.href = mailtoLink;
}