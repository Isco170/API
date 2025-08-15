var express = require('express')
var jpController = require('../controller/jp_template.controller')
var router = express.Router()

router.post('/create', jpController.createJPModel)
router.delete('/delete', jpController.deleteJPModel)
// router.get('/read:/user/:password', jpController.readJPModel)

module.exports = router;