var storeLocation;
var method;
$( document ).ready(function() {
	hideAll();
	var options = localStorage.getItem('_options');
	if(!options) return false;
	options = JSON.parse(options);
	storeLocation = options.location;
	method = options.method;
	console.log(options.location, options.method);

	if(method === "carryout") {
		$("#deliveryInfo").hide();
		$("#one").show();
	}

	$("input[name='cat']").on("change", function(e) {
			$("#add").show("fade");
	});

	$("#infoButton").on("click", function(e) {
		e.preventDefault();
		// TODO: Street address validation with google maps!
		// check for if address is valid or not. <-- definitely needs
		// TODO: check for distance from store to address.
		// this is a later function. <-- would like this
		$("#deliveryInfo").hide();
		$("#one").show("fade");
	});

	$("#continueButton").on("click", function(e) {
		e.preventDefault();
		$("#go").hide();
		$("#one").show("fade");
	});

	$("#checkoutButton").on("click", function(e) {
		e.preventDefault();
		alert("Checkout Functionality to be added!")
	});

	$("#cartButton").on("click", function(e) {
		e.preventDefault();
		$("#add").hide();
		$("#one").hide();
		$("#go").show("fade");
	});

});

function hideAll() {
	$("#one").hide();
	$("#two").hide();
	$("#go").hide();
	$("#add").hide();
}
