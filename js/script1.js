$(document).ready(function(){
	$('.menu').click(function(){
		$('.nav').toggleClass('active');
		$('.menu').toggleClass('active');
	});
	$('.close').click(function(){
		$('.nav').toggleClass('active');
		$('.close').toggleClass('active');
	});
});