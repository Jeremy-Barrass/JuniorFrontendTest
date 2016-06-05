describe('response', function(){
	var rep, err, resp;

	beforeEach(function(){
		rep = new Response;
		console = {error: function(){}};
		spyOn(console, 'error');
		JSON = {parse: function(){}};
		spyOn(JSON, 'parse');
	});

	it('has a getResponse function', function(){
		expect(typeof rep.getResponse).toEqual('function');
	});

	describe('getResponse', function(){

		describe('Errors', function(){
			beforeEach(function(){
				err = "error!";
				resp = null;
				rep.getResponse(err, resp);
			});

			it('displays an error when one is returned', function(){
				expect(console.error).toHaveBeenCalledWith('Search error!', err);
			});
		});

		describe('Success', function(){
			beforeEach(function(){
				err = null;
				resp = 'response!';
				rep.getResponse(err, resp);
			});

			it('parses the response to JS from JSON', function(){
				expect(JSON.parse).toHaveBeenCalledWith(resp);
			});
		});
	});
});