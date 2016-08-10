$( document ).ready(function() {

	$("#startButton").on("click", function(e) {
		e.preventDefault();

		$.ajax({
			type: "POST",
			dataType: "json",
			url: "/store/retrieve",
			data: {state: "in-progress"},
		}).done(function(result) {
			if (result.error === true) {
				alert(result.message);
				return console.error(result.message);
			}
	// do something with the success, like show a link
			console.log(result);
			for(var i = 0; i < result.length; i++) {
				$("body").append(`<button class="btn btn-primary startBtn" id="order">${result[i].key}</button>   `);
				console.log(result[i].value);
			}
		}).fail(function(err) {
	// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
		});
	});
});
