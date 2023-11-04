const {Router} = require ('express')

const lctosController = require ('../controllers/lctosController.js')


const router = Router()


router.get ('/lctos', lctosController.listarTodasContas)






module.exports = router