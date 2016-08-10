"use strict";
/**
 * Menu Item Model
 * In charge of all things dealing with the Menu Items
 *
 */

module.exports = {
	/**
	* newItem
	* Creates a new menu item object and returns it
	* @param {string} name
	* @param {string} category
	* @param {string} description
	* @param {string} price
	* @returns {object} order -  The full item object
	*/
	newItem: (name, cat, desc, price) => {
		const item = {
			error: false,
			name: name,
			// What is it? pizza? breadsticks?
			category: cat,
			// EXPLAIN TO ME WHAT I PICKED
			description: desc,
			// Size, toppings, etc
			options: [],
			price: price
		};
		return item;
	}
};
