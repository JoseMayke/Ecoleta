const express = require("express")
const server = express()

// Pegar o banco de dados:
const db = require("./database/db")
// Cinfigurar pasta public:
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação 
server.use(express.urlencoded({extended: true}))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da aplicação:
//req: requisição
//res: resposta
// 1 - pagina inicial:
server.get("/", (req,res) => {
    return res.render("index.html")
})

// 2 - pagina Cadastre um ponto de coleta:
server.get("/create-point", (req,res) => {
    //req.query: Query Strings da nossa url
    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    //req.body: Corpo do nosso formulario
    //console.log(req.body)

    //Inserir dados no banco de dados:
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
        `
        const values = [
            req.body.image,
            req.body.name,
            req.body.address,
            req.body.address2,
            req.body.state,
            req.body.city,
            req.body.items
        ]
    
    
        function afterInsertData(err) {
            if(err){
                console.log(err)
                return res.send("Erro no Cadastro!")
            }
            console.log("Cadastrado com sucesso!")
            console.log(this)
            
            return res.render("create-point.html", {saved: true})
        }
    
        db.run(query, values, afterInsertData) //Cemntado se não quiser q insira as insformações de novo
    
    
})

// 3 - ponto de coleta:
server.get("/search", (req,res) => {
    const search = req.query.search

    if(search == ""){
        //Pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }

    // Pegar os dados do banco de dados:
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
                if(err){
                    return console.log(err)
                }
                const total = rows.length
                //Mostrar a pagina html com os dados no banco de dados:
                return res.render("search-results.html", { places: rows, total: total})
            })
})


// iniciar servidor
server.listen(3000)
