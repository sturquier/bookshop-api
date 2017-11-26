const controllers = require('../controllers/shop');

router.get('/shop/books', controllers.findAll);
router.get('/shop/books/:id', controllers.findOne);
router.post('/shop/books', controllers.createOne);
router.patch('/shop/books/:id', controllers.patchOne);
router.delete('/shop/books/:id', controllers.removeOne);
router.get('/shop/books/title/:title', controllers.findOneByTitle);
router.get('/shop/books/authors/:authors', controllers.findAllByAuthors);