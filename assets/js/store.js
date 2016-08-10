$( document ).ready(function() {
var count = 1;
var dropdown = `<div class="dropdown"><button class="btn btn-default dropdown-toggle"
	type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	View Items<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
	</ul></div>`;

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
			for(var i = 0; i < result.length; i++) {
				var items = result[i].value.items.length;

				$("#content").append(`<tr><th scope="row">${count}</th><td>${result[i].value.state}</td>
					<td>${result[i].value.dateTime}</td><td>${result[i].value.location}</td>
					<td>${result[i].value.method}</td><td>${dropdown}</td></tr>`);

				if(items.length > 0) {
					for(var i = 0; i < result[i].value.items.length; i++) {
						$(".dropdown-menu").append(`<li>${result[i].value.items[i]}</li>`);
					}
				}

				count++
			}
		}).fail(function(err) {
	// do something with the failure, like laugh at the user
			window.alert("hahahahaha! NO!");
			console.error(err);
		});
});
