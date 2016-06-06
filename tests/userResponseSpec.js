describe('userResponse', function(){
	var rep, err, resp;

	beforeEach(function(){
		rep = new UserResponse();
		console = {error: function(){}};
		spyOn(console, 'error');
		JSON = {parse: function(){}};
		spyOn(JSON, 'parse');
	});

	it('has a getResponse function', function(){
		expect(typeof rep.getResponse).toEqual('function');
	});

});