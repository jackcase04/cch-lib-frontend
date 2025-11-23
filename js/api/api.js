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
            response: jqXHR.responseText || jqXHR.responseJSON, textStatus, errorThrown
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
	getUserName(email, password) {
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
	
	
	
	
	
	
	
	// Example stuff below ----------------------------------------
	
	/* Example: A function to submit form data
	submitDriveData(dataObject) {
		return $.ajax({
			url: `${this.BASE_URL}/submit`,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(dataObject)
		}).fail(this._handleError);
	}
	
	
	
	//Example API just for reference
	/* Example: A function to fetch a list of all drives
	fetchDrivesList() {
		// Use Query.ajax for simplicity since you mentioned using jQuery
		return jQuery.ajax({
			url: `${this.BASE_URL}/drives`,
			method: 'GET',
			dataType: 'json'
		}).fail(this._handleError); // Use .fail() for error handling with jQuery
	}*/
	
	
	/*
	// GET Request: Retrieve data from a resource
    async get(endpoint) {
        const url = `${this.#BASE_URL}${endpoint}`;
        try {
            const response = await fetch(url);
            return this.#handleResponse(response);
        } catch (error) {
            console.error("GET request error:", error);
            throw error; // Re-throw to be handled by the UI file
        }
    }

    // POST Request: Create a new resource
    async post(endpoint, data) {
        const url = `${this.#BASE_URL}${endpoint}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            return this.#handleResponse(response);
        } catch (error) {
            console.error("POST request error:", error);
            throw error;
        }
    }

    // PUT Request: Update an existing resource (full replacement)
    async put(endpoint, data) {
        const url = `${this.#BASE_URL}${endpoint}`;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);
            return this.#handleResponse(response);
        } catch (error) {
            console.error("PUT request error:", error);
            throw error;
        }
    }

    // DELETE Request: Remove a resource
    async delete(endpoint) {
        const url = `${this.#BASE_URL}${endpoint}`;
        const options = {
            method: 'DELETE',
        };

        try {
            const response = await fetch(url, options);
            // DELETE requests often return a 204 No Content or a simple message
            if (response.status === 204) return null; 
            return this.#handleResponse(response);
        } catch (error) {
            console.error("DELETE request error:", error);
            throw error;
        }
    }
	
	*/
	
}

//Give UI access to APIs via import
export const API = new APIclient(); 
	