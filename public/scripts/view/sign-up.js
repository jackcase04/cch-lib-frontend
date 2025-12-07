import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var signUpForm = jQuery('#sign-up-form'), 
		signUpError = jQuery('#sign-up-error-field')[0],
		fname = jQuery('#fname')[0], 
		lname = jQuery('#lname')[0], 
		email = jQuery('#email')[0],  
		password = jQuery('#pwd')[0], 
		confirmPassword = jQuery('#confirm-pwd')[0]; 
		
		
		
		signUpForm.on('submit', function(e) {
			e.preventDefault();
			
			var credentials = {}; 
			credentials.firstName = fname.value.trim();
			credentials.lastName = lname.value.trim();
			credentials.email = email.value.trim();
			credentials.password = password.value.trim();
			credentials.passwordConfirm = confirmPassword.value.trim();
			
			var validationResult = validateCredentials(credentials); 
			if(validationResult.isValid) {
				signUpError.hidden = true;
				
				alert("Credentials valid."); 
				
				/*
				API.signUp(credentials).done(function() {
					signUpError.hidden = true; 
					window.location.replace("/login.html");
				}).fail(function() {
					//Generic error message. 
					signUpError.innerHTML = ''; 
					signUpError.textContent('There was an error signing up. Please try again later.');
					signUpError.hidden = false;
					
				}); */
				
			} else {
				
				var msgs = validationReult.errorMsgs;
				signUpForm.innerHTML = '';  
				if(msgs.length == 1) {
					signUpForm.textContent(msgs[0]); 
				} else {
					
					var list = document.createElement('ul'); 
					list.setAttribute('id', 'error-msgs');
					list.classList.add('unordered-items-list'); 
					signUpError.appendChild(list); 
					
					msgs.forEach(msg => {
						var li = document.createElement('li'); 
						li.textContent = msg; 
						list.appendChild(li); 
					}); 
					
				}
				signUpError.hidden = false;
			}
						
		});
		
		//Validate credentials to ensure they follow appropriate conventions. 
		function validateCredentials(credentials) {
			
			errorMsgs = [];
			
			if(!/^[A-Za-z]+$/.test(credentials.firstName)) {
				errorMsgs.push('First name must consist only of letters.'); 
			}
			
			if(!/^[A-Za-z]+$/.test(credentials.lastName)) {
				errorMsgs.push('Last name must consist only of letters.'); 
			}
			
			var emailDomain = credentials.email.split('@', 2)[1].split('.', 1)[0]; 
			if(emailDomain !== 'mst') {
				errorMsgs.push('Email must be an mst email.'); 
			}
			
			if(credentials.password !== credentials.passwordConfirm) {
				errorMsgs.push('Password confirmation does not match password.');
			}
			
			var validationResult = {}; 
			validationResult.errorMsgs = errorMsgs; 
			if(errorMsgs.length == 0) {
				validationResult.isValid = true;
			} else {
				validationResult.isValid = false;
			}
			
			return validationResult; 
			
		}
	
	
});