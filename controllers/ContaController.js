const database = require('../models')

class ContaController {


    //static -> este metodo pode ser chamado sem criar uma nova instancia de classe (um "new controller")
    //async -> este metodo precisa esperar outros metodos para devolver a resposta 

    static async listarTodasContas(req, res) {

        try {
            const todasAsContas = await database.a2023contas.findAll()
            return res.status(200).json(todasAsContas)
        } catch (error) {
            return res.status(500).json(error.message)

        }

    }


    static async listaUmaConta(req, res) {

        const { id } = req.params

        try {
            const umaConta = await database.a2023contas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(umaConta)
        } catch (error) {
            return res.status(500).json(error.message)

        }

    }

    static async criaConta(req, res) {

        const novaConta = req.body

        try {
            const novaContaCriada = await database.a2023contas.create(novaConta)
            return res.status(200).json(novaContaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaConta(req, res) {
        const { id } = req.params
        const novoDado = req.body

        try {
            await database.a2023contas.update(novoDado, { where: { id: Number(id) } })
            const contaAtualizada = await database.a2023contas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(contaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }



    }

    static async apagaConta (req, res){

        const {id} = req.params
        try {
            await database.a2023contas.destroy({ where: { id: Number(id) } }) 
            return res.status(200).json({mensagem:`id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    }
    

   




module.exports = ContaController