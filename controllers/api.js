"use strict";

const config = require("../config.json");
const parse = require("co-body");

// Set up monk
const monk = require("monk");
const wrap = require("co-monk");
const db = monk("localhost/orders");

// Wrap monk in generator goodness
const posts = wrap(db.get("posts"));

const parse = require("co-body");

const db = require("../helpers/db");

const orderModel = require("../models/order");

/**
* newOrder
* Creates a new order, and sends the client back the information
*
*/
module.exports.newOrder = function* newOrder() {
<<<<<<< HEAD
	const order = yield parse(this);
	order.created_on = new Date();

	try
	{
		this.body = yield order.insert(order);
		this.status = 201;
	}
	catch (e)
	{
		this.body = "An error occured: ${e}";
		this.status = 401;
	}

=======
	const params = this.request.body;
	if (!params.location && params.method) {
		this.status = 400;
		return this.body = {error: true, message: "Must include location and method"};
	}

	const order = orderModel.newOrder(params.location, params.method);
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	const result = yield db.saveOrder(order);
	if (result.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = result;

};

module.exports.getOrder = function* getOrder() {
	const params = this.request.body;
	if (!params.id) {
		this.status = 400;
		console.log(params);
		return this.body = {error: true, message: "Must include orderID"};
	}

	const order = yield db.getOrder(params.id);
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = order;
};

module.exports.saveInfo = function* saveInfo() {
	const params = this.request.body;
	if (!params.order && params.name && params.address && params.phone) {
		this.status = 400;
		return this.body = {error: true, message: "Must include name address and phone number!"};
	}

	const order = orderModel.addCustInfo(params.order, params.customerName, params.customerAddress, params.customerPhone);
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	const result = yield db.saveOrder(order);
	if (result.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = result;

>>>>>>> updates
};
