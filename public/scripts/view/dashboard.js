import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"), 
		greetingTime = jQuery("#greeting-time"), 
		greetingName = jQuery("#greeting-name"), 
		userItemsList = jQuery("#user-items-list"), 
		chkOutNotice = jQuery("#check-out-notice"), 
		returnNotice = jQuery("#return-notice"); 
	
	
	//On load. 
	loadGreetingTime();
	getUserName();
	getUserItems();
	getCheckOutNotices(); 
	getReturnNotices();
	
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
		 var name = API.getUserName(); 
		 greetingName.text(name); 
	}
	
	function getUserItems() {
		//var userItems = API.getUserItems();
		//Do stuff with user items
		if(true) { //userItems.length != 0
			var list = document.createElement('ul'); 
			list.setAttribute('id', '');
			list.classList.add('user-items-list'); 
			userItemsList.appendChild(list); 
			
			
			//userItems.forEach(item => {
			
				
				
			
			//});
		}
		 
	}
	
	function getCheckOutNotices() {
		var checkoutNotices = API.getCheckOutNotices();
		//Do stuff with check out notices.
	}
	
	function getReturnNotices() {
		returnNotices = API.getReturnNotices();
		//Do stuff with return notices.
	}
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav") //Fixes nav-link issue with expanding with hamburger open. 
		
	});	
	
	//TEST OBJECTS
	var userItems = [];
	userItems.push({});
	userItems.push();
	userItems.push();
	
	
	
	
	
	
	
	
	
	
});