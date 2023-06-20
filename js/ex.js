$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		auto: true,
  });
  $('.menu-toggle').on('click',function(){
	$('#mainav').slideToggle('fast');
	$(this).toggleClass('active');
  });
});