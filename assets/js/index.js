var locationSelected = false;
if(localStorage.getItem("options")) {
	localStorage.removeItem("options");
}
$("#two").hide();
$("#go").hide();

$( document ).ready(function() {
	$("input[name='location']").on("change", function(e) {
		if(!locationSelected) {
			$("#two").show("fade");
			locationSelected = true;
		}
	});

	$("input[name='options']").on("change", function(e) {
			$("#go").show("fade");
	});

	$("#startButton").on("click", function(e) {
		e.preventDefault();

		$.ajax({
			type: "POST",
		 	dataType: "json",
		 	url: "/api/order", // A valid URL
		var location = $("input[name=location]:checked").val();
		var method = $("input[name=options]:checked").val();
		$.ajax({
			type: "POST",
		 	dataType: "json",
		 	url: "/api/order",
			data: {location: location, method: method}, // A valid URL
	 	}).done(function(result) {
		 	if (result.error === true) {
		 		alert(result.message);
			 	return console.error(result.message);
		 	}
			// do something with the success, like show a link
			console.log(result);
			// save order id here. this is saved in localStorage
			// TODO: sessions instead.
			var options = {id: result.id};
			options = JSON.stringify(options);
			localStorage.setItem("_options", options);
			window.location = "ordering";
	 	}).fail(function(err) {
			// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
	 });
	});
});
