const shop = require('../models/shop');

exports.findAll = findAll;
exports.findOne = findOne;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;
exports.findOneByTitle = findOneByTitle;
exports.findAllByAuthors = findAllByAuthors;

function findAll(req, res) {

	if (req.query.title) {
		findAllMatchingTitle(req, res);
		return;
	}

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

function patchOne(req, res) {
	shop.patchOne(req.params.id, req.body).then(
		function () {
			res.status(200);
			res.json({ message: 'The book has been patched properly '});
		},
		function (err) {
			res.status(500);
			res.json(err);
		}
	);
}

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

function findAllMatchingTitle(req, res) {
	shop.findAllMatchingTitle(req.query.title).then(
		function (books) {
			res.status(200);
			if (!books.length) {
				res.json({ message: 'This title can not match any books '});
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

function findAllByAuthors(req, res) {

	if (req.params.authors.search(',') != -1) {
		var authors = req.params.authors.split(',');
		var authors_msg = 'These authors can not match any books ';
	} else {
		var authors = req.params.authors;
		var authors_msg = 'This author can not match any books ';
	}

	shop.findAllByAuthors(authors).then(
		function(books) {
			res.status(200);
			if (!books.length) {
				res.json({ message: authors_msg});
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