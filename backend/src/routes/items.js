const express = require('express');

module.exports = (itemsController) => {
  const router = express.Router();

  router.post('/create', itemsController.create.bind(itemsController));
  router.patch('/update/:itemId', itemsController.update.bind(itemsController));
  router.delete(
    '/delete/:itemId',
    itemsController.delete.bind(itemsController),
  );
  router.get('/', itemsController.find.bind(itemsController));

  return router;
};
