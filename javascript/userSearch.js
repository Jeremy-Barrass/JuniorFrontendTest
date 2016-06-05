function UserSearch(){
	this.term = "";
};

UserSearch.prototype.setCriteria = function(name){
	this.term = name;
};