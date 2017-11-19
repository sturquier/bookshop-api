const controllers = require('../controllers/shop');

router.get('/shop/books', controllers.findAll);
router.get('/shop/books/:id', controllers.findOne);
router.get('/shop/books/:authors', controllers.findOneByAuthors);
router.get('/shop/books', controllers.createOne);
router.get('/shop/books/:id', controllers.patchOne);
router.get('/shop/books/:id', controllers.removeOne);