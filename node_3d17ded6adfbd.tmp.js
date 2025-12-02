const express = require("express")
const app = express()
const path = require("path")
const { json } = require("sequelize")
const port = 3001
const fs = require("fs").promises

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/dados", async (req, res)=>{
    try {
        const respJosnJson = await fs.readFile("json.json", "utf-8")
        const dados = JSON.parse(respJosnJson)

        console.log("LENDO ARQUIVO JSON...");
        console.log(dados);

        res.json(dados)
    } catch (error) {
        res.status(500).send("Erro ao carregar JSON: " + error.message);

    }
})

 /*app.get("/dados",(req,res)=>{

    const json1 = [
        {
            "livro": "azul cor do ceu",
            "valor": 29.00
        },
        {
            "livro": "O livro do xuxu azul",
            "valor": 29.00
        },
        {
            "livro": "O livro",
            "valor": 29.00
        },
        {
            "livro": "O mapa",
            "valor": 30.00
        },
        {
            "livro": "A insurgência",
            "valor": 30.00
        },
        {
            "livro": "Computador a maquina",
            "valor": 30.00
        }
    ]
    
    res.json(json1)
    
})*/




app.listen(port,()=>{
    console.log(`port ${port} para APIBASE`)
})