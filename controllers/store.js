"use strict";

const config = require("../config.json");

const parse = require("co-body");

const db = require("../helpers/db");

const orderModel = require("../models/order");


module.exports.getOrders = function* getOrders() {
	const params = this.request.body;
	if (!params.state) {
		this.status = 400;
		console.log(params);
		return this.body = {error: true, message: "Must include order state"};
	}

	const order = yield db.getAllOrders(params.state);
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = order;
};
