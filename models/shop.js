const bookSchema = require('../schemas/book');
const Book = mongoose.model('Book', bookSchema.schema);

exports.findAll = findAll;
exports.findOne = findOne;
exports.findOneByAuthors = findOneByAuthors;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;

function findAll() {}

function findOne() {}

function findOneByAuthors() {}

function createOne(data) {
	let book = new Book();
	book.title = data.title;
	book.publicationDate = new Date();
	book.authors = data.authors;

	return book.save();
}

function patchOne() {}

function removeOne() {}