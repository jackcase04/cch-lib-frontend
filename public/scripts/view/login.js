import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var signInForm = jQuery("#sign-in-form"),
		email = jQuery("#email")[0], 
		password = jQuery("#pwd")[0];
	
	signInForm.on('submit', function(e) {
		e.preventDefault();
		
		var credentials = {}
		credentials.email = email.value.trim();
		credentials.password = password.value.trim();
		
		API.login(credentials).done(function(response) {
			window.location.replace("/public/dashboard.html");
		}).fail(function(){
			alert("Login failed."); //For now.
		}); 
		
	});
	
	
});