var Api = function(){

	this.origin = window.location.origin + '/api/collections/';

	this.localCallback = function(callback){
		var _callback = callback;

		var ok = function(o){
			return _callback(null, o);
		};
		var nok = function(o){
			return _callback(new Error(o));
		};

		return {
			ok: ok,
			nok: nok
		};
	};

};

Api.prototype = Object.create(Object.prototype);
Api.prototype.constructor = Api;

Api.prototype.getAll = function(collectionName, callback){

	var url = this.origin + collectionName + '/all'; 
	var _callback = new this.localCallback(callback);
	$.ajax({
		async:true,
	    url: url,
	    type: 'GET',
	    success: _callback.ok,
	    dataType: 'json',
	    error: _callback.nok
	});

};


