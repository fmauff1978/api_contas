const {Router} = require ('express')

const listacontaController = require ('../controllers/listacontaController.js')


const router = Router()


router.get ('/listacontas', listacontaController.listarTodasContas)






module.exports = router