

	const menu = document.querySelector('#mobile-menu');
	const menuLinks = document.querySelector('.nav-menu');
	
	
	menu.addEventListener('click', function() {
		menu.classList.toggle('is-active');
		menuLinks.classList.toggle('active');
	}) 
	
	
	
	function myFunction() {
	  var x = document.getElementById("bank-info");
	  if (x.style.display === "block") {
		x.style.display = "none";
	  } else {
		x.style.display = "block";
	  }
}