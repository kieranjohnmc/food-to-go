var orderID;
var order;
var items;
var count = 0;
$( document ).ready(function() {
	hideAll();
	getOrder();

//	$("input[name='cat']").on("change", function(e) {
//			$("#add").show("fade");
//			var category = "";
//			$.ajax({
//				type: "POST",
//			 	dataType: "json",
//			 	url: "/api/items",
//				data: {cat: category},
//		 	}).done(function(result) {
//			 	if (result.error === true) {
//			 		alert(result.message);
//				 	return console.error(result.message);
//			 	}
//				// do something with the success, like show a link
//				console.log(result);
//		 	}).fail(function(err) {
//				// do something with the failure, like laugh at the user
//				window.alert("hahahahaha! NO!");
//				console.error(err);
//		 });
//	});

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
			getAllItems();
	 	}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
	 });
});

	$("#checkoutButton").on("click", function(e) {
		e.preventDefault();
		alert("Checkout Functionality to be added!")
	});

	$("#cartButton").on("click", function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/api/addItem",
			data: {item: items[0].value, order: order},
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
		console.log("click");
	});

function hideAll() {
	$("#one").hide();
	$("#two").hide();
}

function getOrder() {

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/api/getOrder",
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
			getAllItems();
		}

	}).fail(function(err) {
		// do something with the failure, like laugh at the user
		window.alert("No order with that id");
		console.error(err);
 });
}

function getAllItems() {
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/api/items",
	}).done(function(result) {
		if (result.error === true) {
			alert(result.message);
			return console.error(result.message);
		}
		// do something with the success, like show a link
		items = result;
		console.log(result);
		for(var i = 0; i < result.length; i++) {

			$("#content").append(`<tr><th scope="row"><input type="checkbox" id="item${count}"></th><td>${result[i].value.name}</td>
				<td>${result[i].value.category}</td><td>${result[i].value.description}</td>
				<td>${result[i].value.price}</td></tr>`);

			count++
		}
	}).fail(function(err) {
		// do something with the failure, like laugh at the user
		window.alert("hahahahaha! NO!");
		console.error(err);
 });
}

});
