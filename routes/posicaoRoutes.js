const {Router} = require ('express')

const posicaoController = require ('../controllers/posicaoController.js')


const router = Router()


router.get ('/posicao', posicaoController.listarTodasContas)






module.exports = router