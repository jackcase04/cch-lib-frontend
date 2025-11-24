import {API} from './api/api.js'; 

jQuery(document).ready(function() {
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"), 
		greetingTime = jQuery("#greeting-time"), 
		greetingName = jQuery("#greeting-name"), 
		yourItemsList = jQuery("#your-items-list"), 
		chkOutNotice = jQuery("#check-out-notice"), 
		returnNotice = jQuery("#return-notice"); 
	
	
	loadGreetingTime();
	getUserName();
	getUserItems();
	getCheckOutNotices(); 
	getReturnNotices();
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav") //This fixes the nav-link issue with expanding with hamburger open. 
		
	});	
	
	
	function loadGreetingTime() {
		var date = new Date();
		var time = date.getHours();
		if(time < 12) {
			greetingTime.text("morning"); 
		} else if (time < 17) {
			greetingTime.text("afternoon"); 
		} else {
			greetingTime.text("evening"); 
		}
	}
	
	function getUserName() {
		 //TODO
	}
	
	function getUserItems() {
		//TODO
	}
	
	function getCheckOutNotices() {
		//TODO
	}
	
	function getReturnNotices() {
		//TODO 
	}
	
	
});