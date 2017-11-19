const shop = require('../models/shop');

exports.findAll = findAll;
exports.findOne = findOne;
exports.findOneByAuthors = findOneByAuthors;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;

function findAll(req, res) {}

function findOne(req, res) {}

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
	)
}

function patchOne(req, res) {}

function removeOne(req, res) {}