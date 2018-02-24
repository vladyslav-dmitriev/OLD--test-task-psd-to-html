import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import 'font-awesome/scss/font-awesome.scss'
import './sass/main.sass';

$(document).ready(function() {
	$('#accordion .accordion__title').on('click', f_accordion);
	$('#accordion .accordion__title').on('click', function() {
		$('#accordion .accordion__title').not($(this)).removeClass('accordion__title_active');
		$(this).addClass('accordion__title_active');
	});
});
 
function f_accordion(){
	$('#accordion .accordion__text').not($(this).next()).slideUp(400);
	$(this).next().slideToggle(400);
	$('#accordion .accordion__title .fas').not($(this)).removeClass('fa-caret-up');
	$(this).find('i').addClass('fa-caret-up');
};

$(document).ready(function() {
	$('#accordion .accordion__title')[0].click();
});