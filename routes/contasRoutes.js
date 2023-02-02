const {Router} = require ('express')

const ContaController = require ('../controllers/ContaController.js')


const router = Router()


router.get ('/contas', ContaController.listarTodasContas)

router.get ('/contas/:id', ContaController.listaUmaConta)

router.post ('/contas', ContaController.criaConta)

router.put ('/contas/:id', ContaController.atualizaConta)

router.delete ('/contas/:id', ContaController.apagaConta)




module.exports = router