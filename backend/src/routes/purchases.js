const express = require('express');

module.exports = (purchasesController) => {
  const router = express.Router();

  router.post('/create', purchasesController.create.bind(purchasesController));
  router.patch(
    '/update/:purchasesId',
    purchasesController.update.bind(purchasesController),
  );
  router.delete(
    '/delete/:purchasesId',
    purchasesController.delete.bind(purchasesController),
  );
  router.get('/', purchasesController.find.bind(purchasesController));

  return router;
};
