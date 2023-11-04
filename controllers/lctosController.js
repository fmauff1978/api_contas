const db = require('../models')
const database = require('../models')


class lctosController {


    //static -> este metodo pode ser chamado sem criar uma nova instancia de classe (um "new controller")
    //async -> este metodo precisa esperar outros metodos para devolver a resposta 

    static async listarTodasContas(req, res) {

       try {
            const todasAsContas = await database.a2023lctos.findAll()
         return res.status(200).json(todasAsContas)
      } catch (error) {
         return res.status(500).json(error.message)

       }

   
    
    }

    

}

   




module.exports = lctosController
