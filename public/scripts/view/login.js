import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var signInForm = jQuery("#sign-in-form"),
		loginError = jQuery("#login-error-field")[0], 
		email = jQuery("#email")[0], 
		password = jQuery("#pwd")[0];
	
	signInForm.on('submit', function(e) {
		e.preventDefault();
		
		var credentials = {}
		credentials.email = email.value.trim();
		credentials.password = password.value.trim();
		
		API.login(credentials).done(function(response) {
			loginError.hidden = true;
			window.location.replace("/public/dashboard.html");
		}).fail(function(){
			loginError.hidden = false;
		}); 
		
	});
	
	
});