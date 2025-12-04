import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"),
		
		searchCategoryWrapper = jQuery("#search-category-wrapper"), 
		dropdownWrapper = jQuery(".dropdown-wrapper"), 
		searchCategory = jQuery("#search-category"), 
		dropdownSelection = jQuery(".dropdown-selection"), 
		selectedOption = jQuery(".selected-option"), 
		searchCategoryOptions = jQuery("#search-category-options"), 
		dropdownOptions = jQuery(".dropdown-options"), 
		dropdownRadios = document.querySelectorAll('input[name="search_category"]'), 
		
		bookFieldsContainer = jQuery("#book-fields"), 
		isbnInput = jQuery("#isbn")[0], 
		titleInput = jQuery("#title"[0]), 
		authorInput = jQuery("#author")[0], 
		equipFieldsContainer = jQuery("#equipment-fields"), 
		equipNameInput = jQuery("#equip-name")[0], 
		
		toggleFormSwitchContainer = jQuery("#toggle-form-switch-container"), 
		toggleFormSwitch = jQuery("#toggle-form-switch")[0], 
		
		resultCount = jQuery("#result-count"), 
		resultViewToggle = jQuery("#result-view-toggle");
			
	
	//Click event for hamburger menu
	hamburgerMenu.on( "click", function(e) {
		e.preventDefault();
		
		// Toggle responsive class
        navLinks.toggleClass("responsive");
		hamburgerLinks.toggleClass("responsive");
		hamburgerLinks.find("a").toggleClass("extra-top-margin-nav")
		
	});	
	
	
	//Check which search category is selected 
	function getSelectedCategory() {
	  const checked = document.querySelector('input[name="search_category"]:checked');
	  return checked ? checked.value : '1';
	}

	
	//Toggle search fields based on whether hide toggle is checked
	toggleFormSwitch.addEventListener('change', function(e) {
		const category = getSelectedCategory();
		
		if(e.target.checked) {
			bookFieldsContainer.hide();
			equipFieldsContainer.hide();		
		} else {
			
			if(category === '2') {
				bookFieldsContainer.show();
			} else {
				equipFieldsContainer.show();
			}
			
		}
		
	});
	
	
	//Display search fields based on selected search category
	dropdownRadios.forEach((button) => {
		button.addEventListener('click', (e) => {
			if(e.target.value === '2') {
				selectedOption.text("Books");
				bookFieldsContainer.show();
				equipFieldsContainer.hide();
				toggleFormSwitchContainer.show();
				toggleFormSwitch.checked = false;
				clearEquipmentFields();
			} else if (e.target.value === '3') {
				selectedOption.text("Equipment");
				bookFieldsContainer.hide();
				equipFieldsContainer.show();
				toggleFormSwitchContainer.show();
				toggleFormSwitch.checked = false;
				clearBookFields();
			} else {
				selectedOption.text("All");
				bookFieldsContainer.hide();
				equipFieldsContainer.hide();
				toggleFormSwitchContainer.hide();
				clearBookFields();
				clearEquipmentFields();
			}
		});
	});
	
	//Clears data from book search fields. 
	function clearBookFields() {
		isbnInput.value = '';
		titleInput.value = ''; 
		authorInput.value = ''; 		
	}
	
	//Clears data from equipment search fields. 
	function clearEquipmentFields() {
		equipNameInput.value = '';
	}

	
});