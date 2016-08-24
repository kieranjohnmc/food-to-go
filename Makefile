REPORTER = nyan

install:
	curl -X PUT http://127.0.0.1:5984/orders
	curl -X PUT http://127.0.0.1:5984/items

clear-db:
	curl -X DELETE http://127.0.0.1:5984/orders
	curl -X DELETE http://127.0.0.1:5984/items
