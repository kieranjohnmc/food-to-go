"use strict";
/**
 * Order Model
 * In charge of all things dealing with the orders
 *
 */

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
			id: 0,
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
