import {API} from './api/api.js'; 

jQuery(document).ready(function() {
	
	var signInForm = jQuery("#sign-in-form"),
		email = jQuery("#email"), 
		password = jQuery("#pwd");
	
	
	//Authenticate user and, if applicable, log in.
	signInForm.on('submit', function(e) {
		e.preventDefault();
		
		API.login(email.value, password.value).done(function(response) {
			if(response.success) {
				location.replace("./dashboard.html");
			} else {
				alert(response.message || 'Invalid credentials'); 
			}
		}).fail(function() {
			alert("Login failed - Please try again later."); 
		}); 
		
	});
	
	
	
	
	
	
	
	
});