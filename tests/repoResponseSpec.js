describe('repoResponse', function(){
	var rep, err, resp;

	beforeEach(function(){
		rep = new RepoResponse();
		console = {error: function(){}};
		spyOn(console, 'error');
		JSON = {parse: function(){}};
		spyOn(JSON, 'parse');
	});

	it('has a getResponse function', function(){
		expect(typeof rep.getResponse).toEqual('function');
	});


	describe('Error', function(){
		beforeEach(function(){
			err = 'Error!';
			resp = null;
			rep.getResponse(err, resp);
		});

		it('passes an error to the console for logging', function(){
			expect(console.error).toHaveBeenCalledWith('Search error!  Repos ', err);
		});
	});
});