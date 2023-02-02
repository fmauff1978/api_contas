const {Router} = require ('express')

const agregadoController = require ('../controllers/agregadoController.js')


const router = Router()


router.get ('/agregados', agregadoController.listarTodasContas)






module.exports = router