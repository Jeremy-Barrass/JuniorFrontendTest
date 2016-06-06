function RepoResponse(){};


RepoResponse.prototype.getResponse = function(error, response){
	if (error) {
		console.error('Search error!  Repos ', error);
	} else {
		response = JSON.parse(response);
		onSuccessRepo(response);
	}	
};

function onSuccessRepo(response){
	document.querySelector("#repoList").textContent = response;
};