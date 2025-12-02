import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"), 
		greetingTime = jQuery("#greeting-time"), 
		greetingName = jQuery("#greeting-name"), 
		yourItems = jQuery("#your-items")[0], 
		chkOutNotice = jQuery("#check-out-notice")[0], 
		returnNotice = jQuery("#return-notice")[0]; 
	
	
	//On load. 
	loadGreetingTime();
	getUserName();
	getUserItems();
	getCheckOutNotices(); 
	getReturnDate();
	
	function loadGreetingTime() {
		var time = new Date().getHours();
		if(time < 12) {
			greetingTime.text("morning"); 
		} else if (time < 17) {
			greetingTime.text("afternoon"); 
		} else {
			greetingTime.text("evening"); 
		}
	}
	
	function getUserName() {
		
		API.getUserName().done(function(userName) {
			
			console.log(userName); //Debug
			if(userName != null) {
				greetingName.text(userName); 
			}
			
		}).fail(function(jqXHR, textStatus, error) {
			console.error('Failed to load user name: ', jqXHR, textStatus, error); 
			greetingName.text('CCF user'); 
		});
		
	}
	
	function getUserItems() {
		
		API.getUserItems().done(function(userItems) {
			
			if(userItems != null && userItems.length > 0) {
				yourItems.innerHTML = '';
			
				var list = document.createElement('ul'); 
				list.setAttribute('id', 'user-items-list');
				list.classList.add('unordered-items-list'); 
				yourItems.appendChild(list); 
				
				userItems.forEach(item => {
					var li = document.createElement('li');
					li.textContent = item.title;
					list.appendChild(li); 				
				});
			}
			
		}).fail(function(jqXHR, textStatus, error) {
			console.error('Failed to load user items: ', jqXHR, textStatus, error);
			yourItems.innerHTML = ''; 
			yourItems.textContent = 'There was an error loading your items.'
		}); 
		
	}
	
	function getCheckOutNotices() {
		var checkOutNotices = API.getCheckOutNotices();
		//Do stuff with check out notices.
	}
	
	function getReturnDate() {
		//returnNotices = API.getReturnDate();
		var month = new Date().getMonth();
		if(month == 5 || month == 8 || month == 12) {
			//For now, just a hardcode. But will pull date from database.
			returnNotice.innerHTML = ''; 
			returnNotice.textContent = "You items are due on 12/19/2025."
		}
	}
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav") //Fixes nav-link issue with expanding with hamburger open. 
		
	});	
	
	
	
	
	
	
	
	
	
	
	
});