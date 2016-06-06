function RepoResponse(){
	var repos;
};


RepoResponse.prototype.getResponse = function(error, response){
	if (error) {
		console.error('Search error!  Repos ', error);
	} else {
		response = JSON.parse(response);
		onSuccessRepo(response);
	}	
};

function onSuccessRepo(response){
	repos = response;
	for (x = 0; x < repos.length; x++) {
		var repo = document.createElement("li");
		repo.classList.add("repo");
		repo.innerHTML = "<h4><span id='title' class='info'></span></h4><span id='stars' class='info'></span><span id='forks' class='info'></span>"
		repo.querySelector("#title").textContent = repos[x].name;
		repo.querySelector("#stars").textContent = "Stars: " + repos[x].stargazers_count;
		repo.querySelector("#forks").textContent = "Forks: " + repos[x].forks_count;
		if (x == 0) {
			document.querySelector("#first").innerHTML = repo.innerHTML;
		} else {
			document.querySelector(".repo").appendChild(repo);
		}
	}
};
