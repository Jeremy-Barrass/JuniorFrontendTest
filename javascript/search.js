document.addEventListener('DOMContentLoaded', function(){

	var api = new ApiSearch();
	var user = new UserSearch();
	var resp = new Response();

	document.querySelector("#submit").addEventListener("click", function(event){
		event.preventDefault();
		user.setCriteria(document.querySelector("#user").value);
		var url = 'https://api.github.com/users/' + user.term;
		api.go(url, resp.getResponse);
	});

});