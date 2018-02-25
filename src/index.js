import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import './sass/main.sass';



$(document).ready(function(){
  	$('.owl-carousel').owlCarousel({
  		loop: true,
  		autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
  		nav: true,
  		margin: 23,
  		responsive: {
            0: {
				items:1
			},
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
  	});
});


