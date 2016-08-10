var orderID;
var order;
$( document ).ready(function() {
	hideAll();
	getOrder();

	$("input[name='cat']").on("change", function(e) {
			$("#add").show("fade");
			var category = ;
			$.ajax({
				type: "POST",
			 	dataType: "json",
			 	url: "/api/items",
				data: {cat: category},
		 	}).done(function(result) {
			 	if (result.error === true) {
			 		alert(result.message);
				 	return console.error(result.message);
			 	}
				// do something with the success, like show a link
				console.log(result);
		 	}).fail(function(err) {
				// do something with the failure, like laugh at the user
				window.alert("hahahahaha! NO!");
				console.error(err);
		 });
	});

	$("#infoButton").on("click", function(e) {
		e.preventDefault();

		var name = $("#name").val();
		var address = $("#address").val() + ", " + $("#city").val() + ", " +
		$("#state").val() + " " + $("#zip").val();
		var phone = $("#number").val();

		// TODO: Street address validation with google maps!
		// check for if address is valid or not.
		// TODO: check for distance from store to address.
		// this is a later function.
		console.log(name);
		console.log(address);
		console.log(phone);
		$.ajax({
			type: "POST",
		 	dataType: "json",
		 	url: "/api/info",
			data: {order: order, name: name, address: address, phone: phone},
	 	}).done(function(result) {
		 	if (result.error === true) {
		 		alert(result.message);
			 	return console.error(result.message);
		 	}
			// do something with the success, like show a link
			console.log(result);
			$("#deliveryInfo").hide();
			$("#one").show("fade");
	 	}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
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
});

function hideAll() {
	$("#one").hide();
	$("#two").hide();
	$("#go").hide();
	$("#add").hide();
}

function getOrder() {
	// FIXME: This needs to be sessions, not local storage
	var options = localStorage.getItem('_options');
	if(!options) return false;
	options = JSON.parse(options);

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/api/getOrder",
		data: {id: options.id},
	}).done(function(result) {
		if (result.error === true) {
			alert(result.message);
			console.log(orderID);
			return console.error(result.message);
		}
		// do something with the success, like show a link
		order = result;
		console.log(order);
		if(order.method === "carryout") {
			$("#deliveryInfo").hide();
			$("#one").show();
		}

	}).fail(function(err) {
		// do something with the failure, like laugh at the user
		window.alert("No item with that id");
		console.error(err);
 });
}
