/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// EmailJS form submission
	$('form').on('submit', function(event) {
		event.preventDefault(); // Prevent the default form submission
  
		var formData = $(this).serialize(); // Get the form data
  
		emailjs.sendForm('service_8d9n0nk', 'template_fpgbyig', this)
		   .then(function() {
			  // Show a success message or perform other actions upon success
			  $('<span class="success-message">&#10004; Message sent successfully!</span>').insertAfter('form input[type="submit"]');
		   }, function(error) {
			  // Handle errors here
			  console.log('Failed to send email:', error);
		   });
	 });

})(jQuery);

