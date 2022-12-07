const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./route.controller')

const router = express.Router();

router.get('/',controller.getAll);
router.post('/getOne',controller.getOne);
router.post('/create',controller.create);
router.patch('/update/:id',controller.update);
router.delete('/delete/:id',controller.delete);

module.exports = router;