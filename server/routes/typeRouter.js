const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkRouter = require('../middleware/checkRoleMiddlware')


router.post('/', checkRouter('ADMIN'), typeController.create)
router.get('/', typeController.getAll)



module.exports = router