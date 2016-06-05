function Response(){};


Response.prototype.getResponse = function(error, response){
	if (error) {
		console.error('Search error!', error);
		onError(error);
	} else {
		response = JSON.parse(response);
		onSuccess(response);
	}	
};

function onError(error){
	document.querySelector("#results").classList.add("notFound");
	document.querySelector("#msg").textContent = "Does not exist. " + error;
};

function onSuccess(response){
	document.querySelector("#results").classList.remove("notFound");
	document.querySelector("#avatar").setAttribute("src", response.avatar_url);
	document.querySelector("#avatar").classList.remove("visible")
	document.querySelector("#username").textContent = response.login;
	document.querySelector("#name").textContent = response.name;
	document.querySelector("#bio").textContent = response.bio;
};
