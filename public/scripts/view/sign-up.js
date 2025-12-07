import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var signUpForm = jQuery('#sign-up-form'), 
		fname = jQuery('#fname'), 
		lname = jQuery('#lname'), 
		email = jQuery('#email'),  
		password = jQuery('#pwd'), 
		confirmPassword = jQuery('#confirm-pwd'); 
		
		
		
		signUpForm.on('submit', function(e) {
			e.preventDefault();
			
			alert("Submit event heard."); 
			
		
			
		});
	
	
});