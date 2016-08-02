"use strict";

const expect = require("chai").expect;
const itemModel = require("../models/item");

let item;

describe("Item Model - New Item", () => {
	before(() => {
		item = itemModel.newItem();
	});

	it("item should be a valid object", (done) => {
		expect(item).to.not.be.an("undefined");
		expect(item).to.be.an("object");
		return done();
	});

	it("order should have required properties", (done) => {
		expect(item).to.have.property("error");
		expect(item).to.have.property("name");
		expect(item).to.have.property("category");
		expect(item).to.have.property("description");
		expect(item).to.have.property("options");
		expect(item).to.have.property("price");
		return done();
	});

	it("item should have the correct starting values", (done) => {
		expect(item.error).to.be.a("boolean");
		expect(item.error).to.equal(false);
		// TODO: This should be a guid with length of 36 - 32 chars 4 dashes
		expect(item.name).to.be.a("string");
		expect(item.name).to.equal("name");
		// This will be what it is, like pizza, or breadsticks.
		expect(item.category).to.be.a("string");
		expect(item.category).to.equal("category");
		// explanation of what it is exactly
		expect(item.description).to.be.a("string");
		expect(item.description).to.equal("description");
		// should be an empty array since we have no items in the order
		expect(item.options).to.be.an("array");
		expect(item.options.length).to.equal(0);
		// should be 0 since there are no items in the order
		expect(item.price).to.be.a("number");
		expect(item.price).to.equal(0);

		return done();
	});
});
