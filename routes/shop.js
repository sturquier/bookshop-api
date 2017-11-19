const controllers = require('../controllers/shop');

router.get('/shop/books', controllers.findAll);
router.get('/shop/books/:id', controllers.findOne);
router.get('/shop/books/:authors', controllers.findOneByAuthors);
router.post('/shop/books', controllers.createOne);
router.patch('/shop/books/:id', controllers.patchOne);
router.delete('/shop/books/:id', controllers.removeOne);