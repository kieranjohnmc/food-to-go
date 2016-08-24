"use strict";

const config = require("../config.json");

const parse = require("co-body");

const db = require("../helpers/db");

const itemModel = require("../models/item");


module.exports.getOrders = function* getOrders() {
	const params = this.request.body;

	const order = yield db.getAllOrders();
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = order;
};

module.exports.newItem = function* newItem() {
	const params = this.request.body;
	if (!params.name && params.cat && params.desc && params.price) {
		this.status = 400;
		return this.body = {error: true, message: "Must include all variables (name, category, description, and price)"};
	}

	const item = itemModel.newItem(params.name, params.cat, params.desc, params.price);
	if (item.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	const result = yield db.saveItem(item);
	if (result.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = result;

};
