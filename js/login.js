import {API} from './api/api.js'; 

jQuery(document).ready(function() {
	
	var signInForm = jQuery("#sign-in-form"),
		email = jQuery("#email"), 
		password = jQuery("#pwd");
	
	
	//Authenticate user and, if applicable, log in.
	signInForm.on('submit', function(e) {
		e.preventDefault();
		
		//Call AJAX
		
	});
	
});