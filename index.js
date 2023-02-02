const express = require ('express')
const routes = require ('./routes')
const cors = require ('cors')


const app = express()




// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



const port = 3000

routes(app)

app.use(cors())


app.listen(port, () => console.log(`servidor rodando em porta ${port}`))

app.get('/', (req, res)=> res.status(200).send({mensagem:'API FUNCIONANDO'}))

module.exports = app