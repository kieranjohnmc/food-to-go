"use strict";

const config = require("../config.json");

const parse = require("co-body");

const db = require("../helpers/db");

const orderModel = require("../models/order");

/**
* newOrder
* Creates a new order, and sends the client back the information
*
*/
module.exports.newOrder = function* newOrder() {
	const params = this.request.body;
	if (!params.location && !params.method) {
		this.status = 400;
		return this.body = {error: true, message: "Must include location and method"};
	}
	const order = orderModel.newOrder(params.location, params.method);
	if (order.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	// save order to db
	const result = yield db.saveOrder(order);
	if (result.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}
	// save id to session.
	this.session.id = order.id;

	// return result
	return this.body = result;

};

module.exports.getOrder = function* getOrder() {
	const params = this.request.body;

	if (!this.session.id) {
		this.status = 400;
		console.log(params);
		return this.body = {error: true, message: "Must include orderID"};
	}

	const order = yield db.getOrder(this.session.id);
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

};

module.exports.getAllItems = function* getAllItems() {
	const params = this.request.body;

	const item = yield db.getAllItems();
	if (item.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = item;
};

module.exports.addItem = function* addItem() {
	const params = this.request.body;
	if (!params.item && !params.order) {
		this.status = 400;
		return this.body = {error: true, message: "Must include an item"};
	}
	params.order.items.push(params.item);

	// save order to db
	const result = yield db.saveOrder(params.order);
	if (result.error === true) {
		this.status = 400;
		return this.body = {error: true, message: order.message};
	}

	return this.body = result;
};
