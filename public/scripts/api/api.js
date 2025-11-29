class APIclient {
	
	BASE_URL = "https://api.ccf-academic-drive"; //Some URL to go here. Current URL only a placeholder. 
	constructor(baseURL) {
		this.BASE_URL = baseURL || this.BASE_URL;
	}
	
	HOST_URL = "https://cch-lib-backend-production.up.railway.app";
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
			data: itemInfo, 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/addLibraryItem`
		}).done(function(response) {
			//empty for now.
		}).fail(this._handleError); 
	}
	
	deleteLibraryItem(itemInfo) {
		return jQuery.ajax({
			data: itemInfo, 
			dataType: 'json', 
			method: 'DELETE', 
			url: `${this.BASE_URL}/deleteLibraryItem`
		}).done({
			//Empty
		}).fail(this._handleError);
	}
	
	getCheckOutNotices(userInfo) { //Cache
		return jQuery.ajax({
			data: userInfo, 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/checkOutNotices`
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	getReturnNotices(userInfo) { //Cache
		return jQuery.ajax({
			data: userInfo, 
			dataType: 'json', 
			method: 'GET', 
			url:`${this.BASE_URL}/returnNotices`
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	getUserItems(userInfo) { //Cache
		return jQuery.ajax({
			data: userInfo, 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/userItems`
		}).done(function(response) {
			return response;
		}).fail(this._handleError);
	}
	
	getUserName(userInfo) { //May not need, but here for now.
		return jQuery.ajax({
			data: userInfo, 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/userName`
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	//Login user
	login(credentials) {
		return jQuery.ajax({
			data: credentials,
			dataType: 'json', 
			method: 'POST', 
			url: `${this.HOST_URL}/${this.AUTH_CONTROL}/login`,
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
	
	//Admin confirmation of item return
	markItemReturned(data) {
		return jQuery.ajax({
			data: data, 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/markReturned`
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	//User claim of item return
	returnItem(data) {
		return jQuery.ajax({
			data: data, 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/returnItem`
		}).done(function(response) {
			return response; 
		}).fail(this._handleError); 
	}
	
	searchLibrary(searchFilters) {
		return jQuery.ajax({
			data: searchFilters, 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/searchLibrary`
		}).done(function(response) {
			return response;
		}).fail(this._handleError); 
	}
	
	signUp(userInfo) {
		return jQuery.ajax({
			data: userInfo, 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/signUp`
		}).done(function(response) {
			//empty
		}).fail(this._handleError); 
	}
	
	updateLibraryItem(itemInfo) {
		return jQuery.ajax({
			data: itemInfo, 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/updateLibraryItem`
		}).done(function(response) {
			//empty
		}).fail(this._handleError); 
	}
	
	
	//Log out user. 
	logout() {
        return jQuery.get('/logout'); //Java servlet invalidates session.
    }
    
	//Checks if session valid.
	checkSession() {
        return jQuery.get('/check-session');  // returns {loggedIn: true/false}
    }
	
	
	
}

//Give UI access to APIs via import
export const API = new APIclient(); 
	