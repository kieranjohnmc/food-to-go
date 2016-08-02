"use strict";

const config = require("../config.json");

const orderModel = require("../models/order");

/**
* new Order
* Creates a new order, and sends the client back the information
*
*/
module.exports.newOrder = function* newOrder() {
	return this.body = this;
};
