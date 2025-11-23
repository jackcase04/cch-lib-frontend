class APIclient {
	
	//https://api.ccf-academic-drive
	BASE_URL = "https://api.ccf-academic-drive";
	constructor(baseURL) {
		this.BASE_URL = baseURL || this.BASE_URL;
	}
	
	_handleError = (jqXHR, textStatus, error) => {
		console.error("API error: ", {
			status: jqXHR.status,
            statusText: jqXHR.statusText,
            response: jqXHR.responseText || jqXHR.responseJSON, textStatus, error
		});
		throw new Error(`API request failed: ${jqXHR.status} ${textStatus}`);
	};

	//Sign-in ---------------------------------------------------
	login(email, password) {
		return jQuery.ajax({
			url: `${this.BASE_URL}/login`, 
			method: 'POST', //POST to protect credentials. 
			data: {email, password}, 
			dataType: 'json',
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
		
	}
	
	//To continue working on. 
	//Dashboard - API to test full stack connectivity. 
	getUserName(userID) {
		return jQuery.ajax({
			url: `${this.BASE_URL}/UserName`, 
			method: 'GET', 
			dataType: 'json',
			data: JSON.stringify(dataObject)
		}).fail(this._handleError); 
	}
	
	//Sign out --------------------------------------------------
	logout() {
        return jQuery.get('/logout'); //Java servlet invalidates session.
    }
    
    
    
	//Other utility stuff ---------------------------------------
	checkSession() {
        return jQuery.get('/check-session');  // returns {loggedIn: true/false}
    }
	
	
	
}

//Give UI access to APIs via import
export const API = new APIclient(); 
	