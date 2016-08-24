const co = require("co");
const Promise = require("bluebird");
const cradle	= Promise.promisifyAll(require("cradle"));
const Chance = require("chance");
const chance = new Chance();

// A custom Error just for database problems.
function CouchDBError(message) {
	this.name = "CouchDBError";
	this.message = (message || "");
}
CouchDBError.prototype = Error.prototype;

// Connects to a database and returns the DB object.
const connectToDatabase = (dbName) => {
	try {
		return new(cradle.Connection)().database(dbName);
	} catch (err) {
		throw new CouchDBError(`DB: Get: Connection to database [${dbName}] failed`);
	}
};

// This is for the orders!

// Grabs an order document from the database in CouchDB.
exports.getOrder = function* getOrder(id) {
	try {
		const db = connectToDatabase("orders");
		const doc = yield db.getAsync(id);
		doc.error = false;
		return doc;
	} catch (err) {
		return {
			error: true,
			message: `DB: Get of [${id}] failed`
		};
	}
};

// Saves an order document in the database in CouchDB.
exports.saveOrder = function* saveOrder(document) {
	try {
		const db = connectToDatabase("orders");
		const returnVal = yield db.saveAsync(document.id, document);
		document.id = returnVal.id;
		document.error = false;
		return document;
	} catch (err) {
		return {
			error: true,
			message: `DB: Save of [${document.id}] failed`
		};
	}
};

// Saves an order document in the database in CouchDB.
exports.saveItem = function* saveItem(document) {
	try {
		const db = connectToDatabase("items");
		const returnVal = yield db.saveAsync(document.id, document);
		document.id = returnVal.id;
		document.error = false;
		return document;
	} catch (err) {
		return {
			error: true,
			message: `DB: Save of [${document.id}] failed`
		};
	}
};

// Removes an order document in the database in CouchDB.
exports.removeOrder = function* removeOrder(id) {
	try {
		const db = connectToDatabase("orders");
		const returnVal = yield db.removeAsync(id);
		returnVal.error = false;
		return returnVal;
	} catch (err) {
		return {
			error: true,
			message: `DB: Delete of [${id}] failed`
		};
	}
};

// Grabs all order documents from the database in CouchDB.
exports.getAllOrders = function* getAllOrders() {
	try {
		const db = connectToDatabase("orders");
		const doc = yield db.viewAsync("getorders/all");
		doc.error = false;
		return doc;
	} catch (err) {
		return {
			error: true,
			message: "DB: Get of all order docs failed"
		};
	}
};

// This is for the items

// Grabs all item documents from the database in CouchDB.
exports.getAllItems = function* getAllItems() {
	try {
		const db = connectToDatabase("items");
		const doc = yield db.viewAsync("getitems/all");
		doc.error = false;
		return doc;
	} catch (err) {
		return {
			error: true,
			message: "DB: Get of all item docs failed"
		};
	}
};
