
var btn = document.getElementById('btn');
btn.onclick = function() {
	alert('Кнопка кликнута');
	var text = document.querySelector('.intro')
	text.classList.add('red');
	var img = document.querySelector('.desktop')
	img.style.displey = 'none';
	document.querySelector('.skill-change').style.marginLeft = "50px";

}

$(function() {

$(window).scroll(function() {
	$('#learn. section-title').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInLeft");

		}
	});
});

})

