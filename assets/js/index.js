$( document ).ready(function() {

	$("#startButton").on("click", function(e) {
		e.preventDefault();

		$.ajax({
			type: 'POST',
		 	dataType: 'json',
		 	url: "/api/order", // A valid URL
	 	}).done(function(result) {
		 	if (result.error === true) {
		 		alert(result.message);
			 	return console.error(result.message);
		 	}
			// do something with the success, like show a link
			window.alert("Starting Order!");
			console.log(result);
	 	}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
	 });
	});
});
