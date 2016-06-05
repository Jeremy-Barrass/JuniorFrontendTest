document.addEventListener('DOMContentLoaded', function(){

	search = new UserSearch();

	document.querySelector("#submit").addEventListener("click", function(event){
		event.preventDefault();
		search.setCriteria(document.querySelector("#user").value);
		var url = 'https://api.github.com/users/' + search.user;
		search.go(url);
	});
});