$( document ).ready(function() {

	$("#addButton").on("click", function(e) {
		e.preventDefault();

		var name = $("#name").val();
		var category = $("#category").val();
		var description = $("#description").val();
		var price = $("#price").val();

		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/store/items/add",
			data: {name: name, cat: category, desc: description, price: price},
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
});
