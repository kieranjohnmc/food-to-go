"use strict";
/**
 * Order Model
 * In charge of all things dealing with the orders
 *
 */

const Chance = require("chance");
const chance = new Chance();

module.exports = {
	/**
	* newOrder
	* Creates a new order object and returns it
	*
	* @param {string} location - location of the store to send orders to
	* @param {string} method - delivery or carryout
	* @returns {object} order -  The full order object
	*/

	newOrder: (location, method) => {
		const order = {
			error: false,
			id: chance.guid(),
			dateTime: new Date(),
			status: "preparing",
			state: "in-progress",
			location: location,
			method: method,
			customerName: "name",
			customerAddress: "address",
			customerPhone: "123-456-7890",
			items: []
		};

		return order;
	},

	/**
	* addCustInfo
	* Attempts to add customer info
	*
	* @param {string} order - The full order object
	* @param {string} name - name of customer
	* @param {string} address - full address of customer
	* @param {string} phone - phone number of customer
	* @returns {object} game -  The full game object
	*/

	addCustInfo: (game, name, address, phone) => {
		game.customerName = name;
		game.customerAddress = address;
		game.customerPhone = phone;
		return game;
	}

};
