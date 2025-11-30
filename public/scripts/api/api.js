class APIclient {
	
	BASE_URL = "https://cch-lib-backend-production.up.railway.app";
	AUTH_CONTROL = 'auth';
	
	
	_handleError = (jqXHR, textStatus, error) => {
		console.error("API error: ", {
			status: jqXHR.status,
            statusText: jqXHR.statusText,
            response: jqXHR.responseText || jqXHR.responseJSON, textStatus, error
		});
		throw new Error(`API request failed: ${jqXHR.status} ${textStatus}`);
	};
	
	addLibraryItem(itemInfo) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(itemInfo), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/addLibraryItem`,
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			//empty for now.
		}).fail(this._handleError); 
	}
	
	checkSession() {
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url: `${this.HOST_URL}/${this.AUTH_CONTROL}/check-session`,
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	deleteLibraryItem(itemInfo) {
		return jQuery.ajax({
			contentType: 'application/json', 
			data: JSON.stringify(itemInfo), 
			dataType: 'json', 
			method: 'DELETE', 
			url: `${this.BASE_URL}/deleteLibraryItem`, 
			xhrFields: {withCredentials: true}
		}).done({
			//Empty
		}).fail(this._handleError);
	}
	
	getCheckOutNotices() { //Cache
		return jQuery.ajax({ 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/checkOutNotices`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	getReturnNotices() { //Cache
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url:`${this.BASE_URL}/returnNotices`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	getUserItems() { //Cache
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/userItems`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError);
	}
	
	getUserName() {
		return jQuery.ajax({ 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/userName`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	//Login user
	login(credentials) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(credentials),
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/${this.AUTH_CONTROL}/login`,
			xhrFields: { withCredentials: true }
		}).done(function(response){
			console.log("Successful login."); //Tmp 
			//Intialize session to store userID. 
		}).fail(function(jqXHR, textStatus, error){
			console.error("API error: ", { //Just for now. Thinking about my formatting.
				status: jqXHR.status, 
				statusText: jqXHR.statusText, 
				response: jqXHR.responseText || jqXHR.responseJSON, textStatus, error
			}); 
		}); 
	}
	
	logout() {
		return jQuery.ajax({
			dataType: 'json',
			method: 'POST', 
			url: `${this.HOST_URL}/${this.AUTH_CONTROL}/logout`,
			xhrFields: { withCredentials: true }
		}); 
	}
	
	//Admin confirmation of item return
	markItemReturned(data) {
		return jQuery.ajax({
			contentType: 'application/json', 
			data: JSON.stringify(data), 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/markReturned`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	//User claim of item return
	returnItem(data) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(data), 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/returnItem`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response; 
		}).fail(this._handleError); 
	}
	
	searchLibrary(searchFilters) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(searchFilters), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/searchLibrary`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	signUp(userInfo) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(userInfo), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/signUp`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			//empty
		}).fail(this._handleError); 
	}
	
	updateLibraryItem(itemInfo) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(itemInfo), 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/updateLibraryItem`, 
			xhrFields: { withCredentials: true }
		}).done(function(response) {
			//empty
		}).fail(this._handleError); 
	}	
	
}

//Give UI access to APIs via import
export const API = new APIclient(); 
	