const express = require('express');
const router = express.Router();
const movieController = require('../app/api/controllers/passport');

router.get('/', movieController.getAll);
router.post('/', movieController.create);
router.get('/:userId', movieController.getById);
router.put('/:userId', movieController.updateById);
router.delete('/:userId', movieController.deleteById);

module.exports = router;