function Response(){
	var suc, err;
};


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
	suc = document.querySelectorAll(".success");
	for(x = 0; x < suc.length; x++) {
		suc[x].classList.add("invisible");
	}
	err = document.querySelectorAll(".error");
	for(x = 0; x < err.length; x++) {
		err[x].classList.remove("invisible");
	}
	document.querySelector("#results").classList.add("notFound");
	document.querySelector("#msg").textContent = "Does not exist. " + error;
};

function onSuccess(response){
	suc = document.querySelectorAll(".success");
	for(x = 0; x < suc.length; x++) {
		suc[x].classList.remove("invisible");
	}
	err = document.querySelectorAll(".error");
	for(x = 0; x < err.length; x++) {
		err[x].classList.add("invisible");
	}
	document.querySelector("#results").classList.remove("notFound");
	document.querySelector("#avatar").setAttribute("src", response.avatar_url);
	document.querySelector("#username").textContent = response.login;
	document.querySelector("#name").textContent = response.name;
	document.querySelector("#bio").textContent = response.bio;
	document.querySelector("#repos").textContent = "Repositories";

};
