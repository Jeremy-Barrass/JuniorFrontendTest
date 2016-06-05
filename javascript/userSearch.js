function UserSearch(){
	this.user = "";
};

UserSearch.prototype.setCriteria = function(name){
	this.user = name;
};

UserSearch.prototype.go = function(url){
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload = function(){
		if (request.status <= 200 && request.status < 400) {
			var resp = request.responseText;
			console.log(resp);
		} else {
			console.error(request.statusText);
		}
	};

	request.onerror = function(e) {
		console.error(request.statusText);
	};

	request.send(null)
};


