"use strict";

const config = require("../config.json");

let user = null;

module.exports.index = function* index() {
	if (this.isAuthenticated()) {
		user = this.session.passport.user;
	}
	yield this.render("index", {
		title: config.site.name,
		user: user,
		script: "index"
	});
};

module.exports.ordering = function* ordering() {
	yield this.render("ordering", {
		title: config.site.name,
		script: "ordering"
	});
};
