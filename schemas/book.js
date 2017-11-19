exports.schema = new mongoose.Schema({
	title: String,
	publicationDate: Date,
	authors: [{
		type: String
	}]
});