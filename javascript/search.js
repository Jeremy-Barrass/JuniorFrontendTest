document.addEventListener('DOMContentLoaded', function(){

	var search = new UserSearch();
	var response;

	document.querySelector("#submit").addEventListener("click", function(event){
		event.preventDefault();
		search.setCriteria(document.querySelector("#user").value);
		var url = 'https://api.github.com/users/' + search.user;
		search.go(url, getResponse);
	});
});

function getResponse(error, response) {
	if (error) {
		console.error('Search error!', error)
		document.querySelector("#results").classList.add("notFound");
		document.querySelector("#msg").textContent = "Does not exist."
	} else {
		response = JSON.parse(response);
		document.querySelector("#results").classList.remove("notFound");
		document.querySelector("#avatar").setAttribute("src", response.avatar_url);
		document.querySelector("#username").textContent = response.login;
	}
};