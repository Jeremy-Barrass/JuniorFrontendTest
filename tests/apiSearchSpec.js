describe('apiSearch', function(){
	var api;

	beforeEach(function(){
		url = 'www.pretendurl.com/user/Mickey';
		api = new ApiSearch();
	});

	it('sends a search request', function(){
		var reqSent = jasmine.createSpy('success');
		jasmine.Ajax.withMock(function(){
			XMLHttpRequest.prototype.onreadystatechange = function(args){
				if (this.readyState == this.DONE) {
					reqSent(this.responseText);
				}
			};
			api.go(url, function(){});
			expect(reqSent).not.toHaveBeenCalled();
			jasmine.Ajax.requests.mostRecent().respondWith({
				"status": 200,
				"responseText": {"user": "Mickey Mouse"}
			});
			expect(reqSent).toHaveBeenCalledWith({"user": "Mickey Mouse"});
		});
	})

});