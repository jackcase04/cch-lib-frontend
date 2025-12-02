class APIclient {
	
	BASE_URL = "https://cch-lib-backend-production.up.railway.app";
	AUTH_CONTROL = 'auth';
	BOOK_CONTROL = 'books'; 
	EQUIP_CONTROL = 'equip'; 
	
	
	_handleError = (jqXHR, textStatus, error) => {
		console.error("API error: ", {
			status: jqXHR.status,
            statusText: jqXHR.statusText,
            response: jqXHR.responseText || jqXHR.responseJSON, textStatus, error
		});
		return jQuery.Deferred().reject(jqXHR, textStatus, error).promise();
	};
	
	addBook(item) {
		return jQuery.ajax({
			contentType: 'application/json', 
			data: JSON.stringify(item), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/${this.BOOK_CONTROL}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError);
	}
	
	addEquipment(item) {
		return jQuery.ajax({
			contentType: 'application/json', 
			data: JSON.stringify(item), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/${this.EQUIP_CONTROL}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError);
	}
	
	checkSession() {
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url: `${this.HOST_URL}/${this.AUTH_CONTROL}/session`,
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	deleteBook(item) {
		return jQuery.ajax({ 
			method: 'DELETE', 
			url: `${this.BASE_URL}/${this.BOOK_CONTROL}/${item.id}`, 
			xhrFields: {withCredentials: true}
		}).fail(this._handleError);
	}
	
	deleteEquipment(item) {
		return jQuery.ajax({ 
			method: 'DELETE', 
			url: `${this.BASE_URL}/${this.EQUIP_CONTROL}/${item.id}`, 
			xhrFields: {withCredentials: true}
		}).fail(this._handleError);
	}
	
	getCheckOutNotices() { //Cache
		return jQuery.ajax({ 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/checkout-notices`, //No const yet.
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	
	getReturnDate() { //Cache
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url:`${this.BASE_URL}/return-date`, //No const yet.
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	getUserItems() { //Cache
		return jQuery.ajax({
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/user-items`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError);
	}
	
	getUserName() {
		return jQuery.ajax({ 
			dataType: 'json', 
			method: 'GET', 
			url: `${this.BASE_URL}/${this.AUTH_CONTROL}/user/name`, 
			xhrFields: { withCredentials: true }
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
		}).fail(this._handleError);
	}
	
	logout() {
		return jQuery.ajax({
			dataType: 'json',
			method: 'POST', 
			url: `${this.HOST_URL}/${this.AUTH_CONTROL}/logout`,
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	//Admin confirmation of book return 
	markBookReturned(item) {
		return jQuery.ajax({ 
			method: 'PATCH', 
			url: `${this.BASE_URL}/${this.BOOK_CONTROL}/return-confirmation/${item.id}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	//Admin confirmation of equipment return
	markEquipmentReturned(item) {
		return jQuery.ajax({
			method: 'PATCH', 
			url: `${this.BASE_URL}/${this.EQUIP_CONTROL}/return-confirmation/${item.id}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	//User claim of book return
	returnBook(item) {
		return jQuery.ajax({ 
			method: 'PATCH', 
			url: `${this.BASE_URL}/${this.BOOK_CONTROL}/user-items/${item.id}/return-claim`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	//User claim of equipment return
	returnEquipment(item) {
		return jQuery.ajax({ 
			method: 'PATCH', 
			url: `${this.BASE_URL}/${this.EQUIP_CONTROL}/user-items/${item.id}/return-claim`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	
	searchLibrary(searchFilters) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(searchFilters), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/library-items/search`, //no const yet
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	
	searchLibrary(searchFilters) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(searchFilters), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/search/library-items`, //no const yet
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	signUp(userInfo) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(userInfo), 
			dataType: 'json', 
			method: 'POST', 
			url: `${this.BASE_URL}/${this.AUTH_CONTROL}/sign-up`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	updateBook(item) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(item), 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/${this.BOOK_CONTROL}/${item.id}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}
	
	updateEquipment(item) {
		return jQuery.ajax({
			contentType: 'application/json',
			data: JSON.stringify(item), 
			dataType: 'json', 
			method: 'PUT', 
			url: `${this.BASE_URL}/${this.EQUIP_CONTROL}/${item.id}`, 
			xhrFields: { withCredentials: true }
		}).fail(this._handleError); 
	}	
	
}

//Give UI access to APIs via import
export const API = new APIclient(); 
	