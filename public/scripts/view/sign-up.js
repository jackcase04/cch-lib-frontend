import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	var signUpForm = jQuery('#sign-up-form'), 
		signUpErrorWrapper = jQuery('#sign-up-error-wrapper')[0], 
		signUpErrorField = jQuery('#sign-up-error-field')[0],
		fname = jQuery('#fname')[0], 
		lname = jQuery('#lname')[0], 
		email = jQuery('#email')[0],  
		password = jQuery('#pwd')[0], 
		confirmPassword = jQuery('#confirm-pwd')[0]; 
		
		
		signUpForm.on('submit', function(e) {
			e.preventDefault();
			
			var credentials = {}; 
			credentials.fName = fname.value.trim();
			credentials.lName = lname.value.trim();
			credentials.email = email.value.trim();
			credentials.password = password.value.trim();
			
			var passwordConfirm = confirmPassword.value.trim();
			
			var validationResult = validateCredentials(credentials); 
			if(validationResult.isValid) {
				signUpErrorWrapper.hidden = true;
				
				API.signUp(credentials).done(function() {
					signUpErrorField.hidden = true; 
					window.location.replace("/login.html");
				}).fail(function() {
					//Generic error message. 
					signUpErrorField.innerHTML = ''; 
					signUpErrorField.textContent = 'There was an error signing up. Please try again later.';
					signUpErrorField.hidden = false;
					
				}); 
				
			} else {
				
				var msgs = validationResult.errorMsgs;
				signUpErrorField.innerHTML = '';  
				if(msgs.length == 1) {
					signUpErrorField.textContent = msgs[0]; 
					signUpErrorField.appendChild(document.createElement('br'));
				} else {
					
					var list = document.createElement('ul'); 
					list.setAttribute('id', 'error-msgs');
					list.classList.add('unordered-items-list'); 
					list.style.listStyleType = 'none';
					signUpErrorField.appendChild(list); 
					
					msgs.forEach(msg => {
						var li = document.createElement('li'); 
						li.textContent = msg; 
						list.appendChild(li); 
					}); 

					list.appendChild(document.createElement('br'));
				}
				signUpErrorWrapper.hidden = false;
			}
						
		});
		
		//Validate credentials to ensure they follow appropriate conventions. 
		function validateCredentials(credentials) {
			
			var errorMsgs = [];
			
			if(isEmpty(credentials.fName)) {
				errorMsgs.push('You must enter a first name.'); 
			} else {
				if(!/^[A-Za-z]+$/.test(credentials.fName)) {
					errorMsgs.push('First name must consist only of letters.'); 
				}	
			}
			
			if(isEmpty(credentials.lName)){
				errorMsgs.push('You must enter a last name.'); 
			} else {
				if(!/^[A-Za-z]+$/.test(credentials.lName)) {
					errorMsgs.push('Last name must consist only of letters.'); 
				}
			}
			
			if(isEmpty(credentials.email)) {
				errorMsgs.push('You must enter an email.'); 
			} else {
				var emailDomain = credentials.email.split('@', 2)[1].split('.', 1)[0]; 
				if(emailDomain !== 'mst') {
					errorMsgs.push('Email must be an mst email.'); 
				}
			}
			
			if(isEmpty(credentials.password)) {
				errorMsgs.push('You must enter a password.'); 
			} else {
				if(credentials.password !== passwordConfirm) {
					errorMsgs.push('Password confirmation does not match password.');
				}
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
		
		//Returns whether a field was left empty
		function isEmpty(string) {
			if(string == null || string == '') {
				return true;
			} else {
				return false;
			}
		}
	
});