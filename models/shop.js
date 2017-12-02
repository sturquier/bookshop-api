const bookSchema = require('../schemas/book');
const Book = mongoose.model('Book', bookSchema.schema);

exports.findAll = findAll;
exports.findOne = findOne;
exports.createOne = createOne;
exports.patchOne = patchOne;
exports.removeOne = removeOne;
exports.findOneByTitle = findOneByTitle;
exports.findAllMatchingTitle = findAllMatchingTitle;
exports.findAllByAuthors = findAllByAuthors;

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

/**
 * Patch a single book 
 */
function patchOne(id, data) {
	return Book.findById(id, (err, book) => {
		book.title = data.title ? data.title: book.title;
		book.publicationDate = data.publicationDate ? data.publicationDate: book.publicationDate;
		book.authors = data.authors ? data.authors: book.authors;

		book.save();
	});
}

/** 
 * Delete a single book
 */
function removeOne(id) {
	return Book.findByIdAndRemove(id);
}

/**
 * Return a single book by title
 */
function findOneByTitle(title) {
	return Book.findOne({ title: title }, {'__v': 0});
}

/**
* Return all books matching title & sort by publication date desc
*/
function findAllMatchingTitle(title) {
	return Book.find({ title: new RegExp(title, 'i')})
		.sort({ publicationDate: -1 })
		.exec();
}

function findAllByAuthors() {}