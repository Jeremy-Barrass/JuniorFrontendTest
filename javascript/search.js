document.addEventListener('DOMContentLoaded', function(){

	var api = new ApiSearch();
	var user = new UserSearch();
	var uResp = new UserResponse();
	var rResp = new RepoResponse();

	document.querySelector("#submit").addEventListener("click", function(event){
		event.preventDefault();
		user.setCriteria(document.querySelector("#user").value);
		var url1 = 'https://api.github.com/users/' + user.term;
		var url2 = 'https://api.github.com/users/' + user.term + '/repos';
		api.go(url1, uResp.getResponse);
		api.go(url2, rResp.getResponse);
	});

});