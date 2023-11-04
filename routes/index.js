const bodyParser = require ('body-parser')
const contas = require ('./contasRoutes')
const posicao = require ('./posicaoRoutes')
const agregados = require ('./agregadosRoutes')
const quoc = require ('./quocRoutes')
const lctos = require('./lctosRoutes')
const listacontas = require ('./listacontas2023Routes')


module.exports = app =>{

    app.use(bodyParser.json())

    app.use(contas)

    app.use(posicao)


    app.use(agregados)

    app.use(quoc)

    app.use(lctos)

    app.use(listacontas)



   
    

}