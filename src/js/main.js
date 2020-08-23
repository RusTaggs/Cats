"use strict"

$( ".container" ).on( "click", ".card" , function() {
	$( this ).toggleClass( "active" );
	$(this).children('.card__text_active').toggle();
	

});


$(".container").on("click", ".fua" ,function(){
	if (document.getElementsByClassName("active")[0] && document.getElementsByClassName("fua")[0]) {
	document.getElementsByClassName("fua")[0].getElementsByClassName("card__text")[0].innerHTML = "Печень утки разварная с артишоками.";
	document.getElementsByClassName("fua")[0].getElementsByClassName("card__link")[0].style = "display: none";
	}
	else{
		document.getElementsByClassName("fua")[0].getElementsByClassName("card__text")[0].innerHTML = "Чего сидишь? Порадуй котэ,&nbsp; ";
		document.getElementsByClassName("fua")[0].getElementsByClassName("card__link")[0].style = "display: inline-block";
		
	}
	
});
$(".container").on("click", ".fish" ,function(){
	if (document.getElementsByClassName("active")[0] && document.getElementsByClassName("fish")[0]) {
	document.getElementsByClassName("fish")[0].getElementsByClassName("card__text")[0].innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
	document.getElementsByClassName("fish")[0].getElementsByClassName("card__link")[0].style = "display: none";
	}
	else{
		document.getElementsByClassName("fish")[0].getElementsByClassName("card__text")[0].innerHTML = "Чего сидишь? Порадуй котэ,&nbsp; ";
		document.getElementsByClassName("fish")[0].getElementsByClassName("card__link")[0].style = "display: inline-block";
		
	}
	
});
$(".container").on("click", ".chicken" ,function(){
	if (document.getElementsByClassName("active")[0] && document.getElementsByClassName("chicken")[0]) {
	document.getElementsByClassName("chicken")[0].getElementsByClassName("card__text")[0].innerHTML = "Филе из цыплят с трюфелями в бульоне.";
	document.getElementsByClassName("chicken")[0].getElementsByClassName("card__link")[0].style = "display: none";
	}
	else{
		document.getElementsByClassName("chicken")[0].getElementsByClassName("card__text")[0].innerHTML = "Чего сидишь? Порадуй котэ,&nbsp; ";
		document.getElementsByClassName("chicken")[0].getElementsByClassName("card__link")[0].style = "display: inline-block";
		
	}
	
});




