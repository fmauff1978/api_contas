const {Router} = require ('express')

const quocController = require ('../controllers/quocController.js')


const router = Router()


router.get ('/quocientes', quocController.listarTodasContas)






module.exports = router