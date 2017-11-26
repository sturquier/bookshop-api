const shop = require('../models/shop');

exports.findAll = findAll;
exports.findOne = findOne;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;
exports.findOneByTitle = findOneByTitle;
exports.findAllByAuthors = findAllByAuthors;

function findAll(req, res) {
	shop.findAll().then(
		function (books) {
			res.status(200);
			if (!books.length) {
				res.json({ message: 'There are no books to display '});
			} else {
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

function removeOne(req, res) {
	shop.removeOne(req.params.id).then(
		function () {
			res.status(200);
			res.json({ message: 'The book has been deleted properly '});
		},
		function (err) {
			res.status(500);
			res.json(err);
		}
	);
}

function findOneByTitle(req, res) {
	shop.findOneByTitle(req.params.title).then(
		function (book) {
			if (book === null) {
				res.status(404);
				res.json({ message: 'This book title does not exist '});
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

function findAllByAuthors(req, res) {}