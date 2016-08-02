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
	*/
	newOrder: () => {
		const order = {
			error: false,
			// TODO: change to guid
			id: chance.guid(),
			state: "preparing",
			customerName: "name",
			customerAddress: "address",
			items: [],
			subtotal: 0,
			salesTax: 0,
			total: 0
		};
		return order;
	}
};
