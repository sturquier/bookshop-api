const bookSchema = require('../schemas/book');
const Book = mongoose.model('Book', bookSchema.schema);

exports.findAll = findAll;
exports.findOne = findOne;
exports.findOneByAuthors = findOneByAuthors;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;

/**
 * Return all books sort by publication date desc
 */
function findAll() {
	return Book.find({}, {'__v': 0})
		.sort({ publicationDate: -1 })
		.exec();
}

/**
 * Return a single book by id
 */
function findOne(id) {
	return Book.findById(id, {'__v': 0});
}

function findOneByAuthors() {}

/**
 * Create a single book
 */
function createOne(data) {
	let book = new Book();
	book.title = data.title;
	book.publicationDate = new Date();
	book.authors = data.authors;

	return book.save();
}

function patchOne() {}

function removeOne() {}