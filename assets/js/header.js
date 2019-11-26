var acc = document.getElementsByClassName("type--has-children");
var i;

[...document.getElementsByClassName("type--has-children")].forEach(element => {
	element.addEventListener('click', ev => {
		ev.stopPropagation();
		element.classList.toggle('status--active');
	});
})

/*
 window.addEventListener('load', () => {	
 });

 window.onload = ev => {

 }
 */