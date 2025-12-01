import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"), 
		greetingTime = jQuery("#greeting-time"), 
		greetingName = jQuery("#greeting-name"), 
		yourItems = jQuery("#your-items"), 
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
			yourItems.innerHTML = '';
			
			var list = document.createElement('ul'); 
			list.setAttribute('id', 'user-items-list');
			list.classList.add('user-items-list'); 
			yourItems.appendChild(list); 
			
			userItems.forEach(item => {
				var li = document.createElement('li');
				li.textContent = item.title;
				list.appendChild(li); 				
			});
		}
		 
	}
	
	function getCheckOutNotices() {
		var checkoutNotices = API.getCheckOutNotices();
		//Do stuff with check out notices.
	}
	
	function getReturnNotices() {
		//Check month. If December or May (Or July), get return notices. 
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
	userItems.push({'title': 'Chemistry: A Molecular Approach'});
	userItems.push({'title': 'Elementary Differential Equations and Boundary Value Problems'});
	userItems.push({'title': 'MATLAB: A Practical Introduction to Programming and Problem Solving'});
	
	
	
	
	
	
	
	
	
	
});