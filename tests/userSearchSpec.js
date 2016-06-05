describe('userSearch',function(){
	var search, url, searchTerm;

	beforeEach(function(){
		searchTerm = "Test"
		search = new UserSearch();
	});

	it('has a term variable',function(){
		expect(search.term).toBeDefined();
	});

	it('receives a search term', function(){
		search.setCriteria(searchTerm);
		expect(search.term).toEqual(searchTerm);
	});

});