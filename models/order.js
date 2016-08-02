"use strict";
/**
 * Order Model
 * In charge of all things dealing with the orders
 *
 */

const currentDate = new Date();
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
			id: chance.guid(),
			dateTime: "${currentdate.getDate()}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()}@${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}",
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
