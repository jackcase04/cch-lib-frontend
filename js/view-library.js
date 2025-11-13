jQuery(document).ready(function() {
	
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"),
		//searchCategorySelect = jQuery("#search-category")[0], 
		bookFieldsContainer = jQuery("#book-fields"), 
		isbnInput = jQuery("#isbn"), 
		titleInput = jQuery("#title"), 
		authorInput = jQuery("#author"), 
		equipFieldsContainer = jQuery("#equipment-fields"), 
		equipNameInput = jQuery("#equip-name"), 
		toggleFormSwitchContainer = jQuery("#toggle-form-switch-container"), 
		toggleFormSwitch = jQuery("#toggle-form-switch")[0], 
		resultCount = jQuery("#result-count"), 
		resultViewToggle = jQuery("#result-view-toggle");
		
		
	/*Testing the select stuff. 	
	var searchCategorySelect = jQuery('.search-category-select')[0], 
		selectTrigger = jQuery('.select-trigger'), 
		selectedOption = jQuery('.selected-option'), 
		options = jQuery('.options'), 
		selectArrow = jQuery('.select-arrow');*/
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav")
		
	});	
		
		
		
	//Display search fields dynamically 
	searchCategorySelect.addEventListener('change', function() {
		
		if(this.value === '2') {
			bookFieldsContainer.show();
			equipFieldsContainer.hide();
			toggleFormSwitchContainer.show();
		} else if (this.value === '3') {
			bookFieldsContainer.hide();
			equipFieldsContainer.show();
			toggleFormSwitchContainer.show();
		} else { //Default to all. 
			bookFieldsContainer.hide();
			equipFieldsContainer.hide();
			toggleFormSwitchContainer.hide();
		}
		
	});
	
	
	//Toggle search fields
	toggleFormSwitch.addEventListener('change', function(e) {
		
		if(e.target.checked) {
			bookFieldsContainer.hide();
			equipFieldsContainer.hide();		
		} else {
			
			if(searchCategorySelect.value === '2') {
				bookFieldsContainer.show();
			} else {
				equipFieldsContainer.show();
			}
			
		}
		
	});
	
	
	
	
	
	
	//Testing some select stuff
	/* JavaScript to toggle dropdown and update selected text
	searchCategorySelect.forEach(select => {
		
		selectTrigger.addEventListener('click', function() {
			select.classList.toggle('open');
			options.classList.toggle('hidden');
		});
		
		/*
		
		selectTrigger.addEventListener('click', () => {
			select.classList.toggle('open');
			options.classList.toggle('hidden');
		});
		
		options.forEach(option => {
			option.addEventListener('change', () => {
				selectedOption.textContent = option.nextElementSibling.textContent;
				select.classList.remove('open');
			});
		});
		
		//Close when clicking outside select.
		document.addEventListener('click', (e) => {
			if(!select.contains(e.target)) {
				select.classList.remove('open');
			}
		});*
		
	});*/
	
	
	/*
	
	document.querySelectorAll('.search-category-select').forEach(select => {
	  const trigger = select.querySelector('.select-trigger');
	  const selectedSpan = select.querySelector('.selected-option');
	  const options = select.querySelectorAll('input[type="radio"]');

	  trigger.addEventListener('click', () => {
		select.classList.toggle('open');
		option.classList.toggle('hidden');
	  });

	  options.forEach(option => {
		option.addEventListener('change', () => {
		  selectedSpan.textContent = option.nextElementSibling.textContent;
		  select.classList.remove('open');
		});
	  });

	  // Close when clicking outside
	  document.addEventListener('click', (e) => {
		if (!select.contains(e.target)) {
		  select.classList.remove('open');
		}
	  });
	});
		*/
		
	
	
	
	
	
	
	
		
	
});



/* Example code: 

	//Assign page elements
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links");
	
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav")
		
	});	


*/