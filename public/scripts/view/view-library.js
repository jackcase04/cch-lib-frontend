import {API} from '/scripts/api/api.js'; 

jQuery(document).ready(function() {
	
	
	var navLinks = jQuery("#nav-links"), 
		hamburgerMenu = jQuery(".icon"),
		hamburgerLinks = jQuery(".hamburger-links"),
		
		searchForm = jQuery("#search-form"),
		searchErrorField = jQuery("#search-error-field")[0], 
		searchCategoryWrapper = jQuery("#search-category-wrapper"), 
		dropdownWrapper = jQuery(".dropdown-wrapper"), 
		searchCategory = jQuery("#search-category")[0], 
		dropdownSelection = jQuery(".dropdown-selection"), 
		selectedOption = jQuery(".selected-option"), 
		searchCategoryOptions = jQuery("#search-category-options"), 
		dropdownOptions = jQuery(".dropdown-options"), 
		dropdownRadios = document.querySelectorAll('input[name="search_category"]'), 
		
		bookFieldsContainer = jQuery("#book-fields"), 
		isbnInput = jQuery("#isbn")[0], 
		titleInput = jQuery("#title")[0], 
		authorInput = jQuery("#author")[0], 
		equipFieldsContainer = jQuery("#equipment-fields"), 
		equipNameInput = jQuery("#equip-name")[0], 
		
		toggleFormSwitchContainer = jQuery("#toggle-form-switch-container"), 
		toggleFormSwitch = jQuery("#toggle-form-switch")[0], 
		
		resultsMetadata = jQuery("#results-metadata"),
		resultCount = jQuery("#result-count"), 
		resultViewToggle = jQuery("#result-view-toggle"), 
		cardViewResults = jQuery("#card-view-results");
			
	
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
			//searchCategory[0].setAttribute("data-value", 1) 		
		} else {
			
			if(category === '2') {
				bookFieldsContainer.show();
				//searchCategory[0].setAttribute("data-value", 2)
			} else {
				equipFieldsContainer.show();
				//searchCategory[0].setAttribute("data-value", 3)
			}
			
		}
		
	});
	
	
	//Display search fields based on selected search category
	dropdownRadios.forEach((button) => {
		button.addEventListener('click', (e) => {
			if(e.target.value === '2') {
				selectedOption.text("Books");
				searchCategory.dataset.selectedSearchOption = 2; 
				bookFieldsContainer.show();
				equipFieldsContainer.hide();
				toggleFormSwitchContainer.show();
				toggleFormSwitch.checked = false;
				clearEquipmentFields();
			} else if (e.target.value === '3') {
				selectedOption.text("Equipment");
				searchCategory.dataset.selectedSearchOption = 3;
				bookFieldsContainer.hide();
				equipFieldsContainer.show();
				toggleFormSwitchContainer.show();
				toggleFormSwitch.checked = false;
				clearBookFields();
			} else {
				selectedOption.text("All");
				searchCategory.dataset.selectedSearchOption = 1;  
				bookFieldsContainer.hide();
				equipFieldsContainer.hide();
				toggleFormSwitchContainer.hide();
				clearBookFields();
				clearEquipmentFields();
			}
		});
	});
	
	searchForm.on('submit', function(e) {
		e.preventDefault();
		
		var searchFilters = {}
		//Search books
		if(searchCategory.dataset.selectedSearchOption == '2') {
			console.log("Search books.")
		//Search Equipment
		} else if (searchCategory.dataset.selectedSearchOption == '3') {
			console.log("Search equipment."); 
		//Search all
		} else if (searchCategory.dataset.selectedSearchOption == '1') {
			searchFilters.selectedSearchOption = searchCategory.dataset.selectedSearchOption; 
			API.searchLibrary(searchFilters).done(function(response) {
				populateSearchResults(response.data);
			}).fail(function() {
				
			});
			
		}
		
		
		
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
	
	//Populates the card view with the search results
	function populateSearchResults(results) {
	
		//Update result count
		var count = results.books.length + results.equipment.length; 
		resultCount.text(count);
		resultsMetadata.show();
		
	
	    // Clear previous results
	    cardViewResults.empty(); 
	
	    let currentRow;
	    let itemCount = 0;
	
	    results.books.forEach((book, index) => {
	        // Start a new Bootstrap row for every 4 items (0, 4, 8, etc.)
	        if (itemCount % 4 === 0) {
	            currentRow = jQuery('<div class="row">');
	            cardViewResults.append(currentRow);
	        }
	
	        // Create the column wrapper using Bootstrap grid classes
	        const col = jQuery('<div class="col-xs-12 col-sm-6 col-xxl-3">');
	        
	        // Create the inner card container
	        const card = jQuery('<div class="info-card">');
	
	        card.append(jQuery('<h5>').html(`<b>${book.title}</b>`));
	        card.append(jQuery('<p>').text(book.author));
	        card.append(jQuery('<p>').text(book.description));
	
	        col.append(card);
	        currentRow.append(col);	
	        
	        itemCount++; 
		
		});
		
		results.equipment.forEach((equipment, index) => {
	        // Start a new Bootstrap row for every 4 items (0, 4, 8, etc.) 
	        if (itemCount % 4 === 0) {
	            currentRow = jQuery('<div class="row">');
	            cardViewResults.append(currentRow);
	        }
	
	        // Create the column wrapper using Bootstrap grid classes
	        const col = jQuery('<div class="col-xs-12 col-sm-6 col-xxl-3">');
	        
	        // Create the inner card container
	        const card = jQuery('<div class="info-card">');
	
	        card.append(jQuery('<h5>').html(`<b>${equipment.name}</b>`));
	
	        col.append(card);
	        currentRow.append(col);	
	        
	        itemCount++; 
		
		});
	
	}

	
});