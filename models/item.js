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
	*
	*/
	newItem: () => {
		const item = {
			error: false,
			name: "name",
			// What is it? pizza? breadsticks?
			category: "category",
			// EXPLAIN TO ME WHAT I PICKED
			description: "description",
			// Size, toppings, etc
			options: [],
			price: 0
		};
		return item;
	}
};
