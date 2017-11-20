const shop = require('../models/shop');

exports.findAll = findAll;
exports.findOne = findOne;
exports.findOneByAuthors = findOneByAuthors;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;

function findAll(req, res) {
	shop.findAll().then(
		function (books) {
			if (!books.length) {
				res.status(204);
				res.json({ message: 'There is no book to display '});
			} else {
				res.status(200);
				res.json(books);
			}
		},
		function (err) {
			res.status(500);
			res.json(err);
		}
	);
}

function findOne(req, res) {
	shop.findOne(req.params.id).then(
		function (book) {
			if (book === null) {
				res.status(404);
				res.json({ message: 'This book could not be found '});
			} else {
				res.status(200);
				res.json(book);
			}
		},
		function (err) {
			res.status(500);
			res.json(err);
		}
	);
}

function findOneByAuthors(req, res) {}

function createOne(req, res) {
	shop.createOne(req.body).then(
		function () {
			res.status(201);
			res.json({ message: 'The book has been created properly '});
		}, 
		function (err) {
			res.status(500);
			res.json(err);
		}
	);
}

function patchOne(req, res) {}

function removeOne(req, res) {}