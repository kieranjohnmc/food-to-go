"use strict";

const config = require("../config.json");
const parse = require("co-body");

// Set up monk
const monk = require("monk");
const wrap = require("co-monk");
const db = monk("localhost/orders");

// Wrap monk in generator goodness
const posts = wrap(db.get("posts"));

const orderModel = require("../models/order");

/**
* newGame
* Creates a new game, and sends the client back the information
*
*/
module.exports.newOrder = function* newOrder() {
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

};
