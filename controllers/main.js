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

module.exports.store = function* store() {
	yield this.render("store/store", {
		title: config.site.name,
		script: "store"
	});
};

module.exports.add = function* add() {
	yield this.render("store/add", {
		title: config.site.name,
		script: "addItem"
	});
};
