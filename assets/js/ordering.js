var storeLocation;
var method;
$( document ).ready(function() {
	var options = localStorage.getItem('_options');
	if(!options) return false;
	options = JSON.parse(options);
	storeLocation = options.location;
	method = options.method;
	console.log(options.location, options.method);
});
