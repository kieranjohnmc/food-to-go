"use strict";

const config = require("../config.json");

const orderModel = require("../models/order");

/**
* newGame
* Creates a new game, and sends the client back the information
*
*/
module.exports.newOrder = function* newOrder() {
	return this.body = this;
};
