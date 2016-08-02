"use strict";

const expect = require("chai").expect;
const orderModel = require("../models/order");

let order;

describe("Order Model - New Order", () => {
	before(() => {
		order = orderModel.newOrder();
	});

	it("order should be a valid object", (done) => {
		expect(order).to.not.be.an("undefined");
		expect(order).to.be.an("object");
		return done();
	});

	it("order should have required properties", (done) => {
		expect(order).to.have.property("error");
		expect(order).to.have.property("id");
		expect(order).to.have.property("state");
		expect(order).to.have.property("customerName");
		expect(order).to.have.property("customerAddress");
		expect(order).to.have.property("items");
		expect(order).to.have.property("subtotal");
		expect(order).to.have.property("salesTax");
		expect(order).to.have.property("total");
		return done();
	});

	it("order should have the correct starting values", (done) => {
		expect(order.error).to.be.a("boolean");
		expect(order.error).to.equal(false);
		// TODO: This should be a guid with length of 36 - 32 chars 4 dashes
		expect(order.id).to.be.a("number");
		expect(order.id).to.equal(0);
		expect(order.state).to.be.a("string");
		expect(order.state).to.equal("preparing");
		expect(order.customerName).to.be.a("string");
		expect(order.customerName).to.equal("name");
		expect(order.customerAddress).to.be.a("string");
		expect(order.customerAddress).to.equal("address");
		// should be an empty array since we have no items in the order
		expect(order.items).to.be.an("array");
		expect(order.items.length).to.equal(0);
		// should be 0 since there are no items in the order
		expect(order.subtotal).to.be.a("number");
		expect(order.subtotal).to.equal(0);
		// TODO: should be 0 since tax changes. can add a modifier in admin panel?
		expect(order.salesTax).to.be.a("number");
		expect(order.salesTax).to.equal(0);
		// should be 0 since there are no items in the order
		expect(order.total).to.be.a("number");
		expect(order.total).to.equal(0);

		return done();
	});
});
