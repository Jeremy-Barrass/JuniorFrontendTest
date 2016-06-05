describe('userSearch',function(){
	var search, url, searchTerm;

	beforeEach(function(){
		url = 'www.pretendurl.com/user/';
		searchTerm = "Test"
		search = new UserSearch();
	});

	it('has a user variable',function(){
		expect(search.user).toBeDefined();
	});

	it('receives a search term', function(){
		search.setCriteria(searchTerm);
		expect(search.user).toEqual(searchTerm);
	});

	it('sends a search request', function(){
		var reqSent = jasmine.createSpy('success');
		jasmine.Ajax.withMock(function(){
			search.setCriteria(searchTerm);
			XMLHttpRequest.prototype.onreadystatechange = function(args){
				if (this.readyState == this.DONE) {
					reqSent(this.responseText);
				}
			};
			search.go(url, function(){});
			expect(reqSent).not.toHaveBeenCalled();
			jasmine.Ajax.requests.mostRecent().respondWith({
				"status": 200,
				"responseText": {"user": "Mickey Mouse"}
			});
			expect(reqSent).toHaveBeenCalledWith({"user": "Mickey Mouse"});
		});
	})
});