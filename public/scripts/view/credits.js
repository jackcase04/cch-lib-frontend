import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	//Assign page elements
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links");
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav") //This fixes the nav-link issue with expanding with hamburger open. 
		
	});	
	
	
});