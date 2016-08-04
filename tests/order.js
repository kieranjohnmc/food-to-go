"use strict";

const expect = require("chai").expect;
const orderModel = require("../models/order");

let order;

describe("Order Model - New Order", () => {
	before(() => {
		order = orderModel.newOrder("colville", "delivery");
	});

	it("order should be a valid object", (done) => {
		expect(order).to.not.be.an("undefined");
		expect(order).to.be.an("object");
		return done();
	});

	it("order should have required properties", (done) => {
		expect(order).to.have.property("error");
		expect(order).to.have.property("id");
		expect(order).to.have.property("dateTime");
		expect(order).to.have.property("status");
		expect(order).to.have.property("state");
		expect(order).to.have.property("location");
		expect(order).to.have.property("method");
		expect(order).to.have.property("customerName");
		expect(order).to.have.property("customerAddress");
		expect(order).to.have.property("customerPhone");
		expect(order).to.have.property("items");
		return done();
	});

	it("order should have the correct starting values", (done) => {
		expect(order.error).to.be.a("boolean");
		expect(order.error).to.equal(false);
		// guid with length of 36 - 32 chars 4 dashes
		expect(order.id).to.be.a("string");
		expect(order.id.length).to.equal(36);
		expect(order.dateTime).to.be.a("Date");
		expect(order.status).to.be.a("string");
		expect(order.status).to.equal("preparing");
		expect(order.state).to.be.a("string");
		expect(order.state).to.equal("in-progress");
		expect(order.location).to.be.a("string");
		expect(order.location).to.equal("colville");
		expect(order.method).to.be.a("string");
		expect(order.method).to.equal("delivery");
		expect(order.customerName).to.be.a("string");
		expect(order.customerName).to.equal("name");
		expect(order.customerAddress).to.be.a("string");
		expect(order.customerAddress).to.equal("address");
		expect(order.customerPhone).to.be.a("string");
		expect(order.customerPhone).to.equal("123-456-7890");
		// should be an empty array since we have no items in the order
		expect(order.items).to.be.an("array");
		expect(order.items.length).to.equal(0);

		return done();
	});
});
