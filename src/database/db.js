// Importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar objeto q irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de banco de dados para nossas operações
//db.serialize(() => {
    //Com comandos SQL eu vou:
    //1- Criar tabela
//    db.run(`
//        CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//        );
//    `)
    //2- Inserir dados na tabela
//    const query = `
//        INSERT INTO places (
//            image,
//            name,
//            address,
//            address2,
//            state,
//            city,
//            items
//        ) VALUES (?,?,?,?,?,?,?);
//    `
//    const values = [
//        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//        "Papersider",
//        "Guilherme Gemballa, Jardim América",
//        "Nº 260",
//        "Santa Catarina",
//        "Rio do Sul",
//        "Papéis e Papelão"
//    ]


//    function afterInsertData(err) {
//        if(err){
//            return console.log(err)
//        }
//        console.log("Cadastrado com sucesso!")
//        console.log(this)
//    }

//    db.run(query, values, afterInsertData) //Cemntado se não quiser q insira as insformações de novo

    //3- Consultar dados na tabela
//    db.all(`SELECT name FROM places`, function(err, rows){
//        if(err){
//            return console.log(err)
//        }
//        console.log("Aqui estão seus registros: ")
//        console.log(rows)
//    })


    //4- Deletar um dado na tabela
//    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//        if(err){
//            return console.log(err)
//        }
//        console.log("Registro Deletado Com Sucesso !!")
//    })
//})