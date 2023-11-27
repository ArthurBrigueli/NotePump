import express from 'express'
import bodyParser from 'body-parser'
import db from './db.js'
import cors from 'cors'

const app = express()
const port = 3001

app.use(bodyParser.json())


app.use(cors())


//get all
app.get('/api/treino', (req, res)=>{
    db.query('SELECT * FROM treino', (erro, result)=>{
        if(erro){
            res.status(500).send('erro')
            return
        }
        res.json(result)

    })
})



//get id
app.get('/api/treino/id/:id', (req, res)=>{
    db.query(`SELECT * FROM treino WHERE id = ${req.params.id}`, (erro, result)=>{
        if(erro){
            res.status(500).send('nao encontrado')
        }
        res.json(result[0])
    })
})


//get treino por tipo de treino
app.get('/api/treino/tipo/:tipo', (req, res)=>{
    db.query(`SELECT * FROM treino WHERE tipo = ? ORDER BY id DESC`, [req.params.tipo], (erro, result)=>{
        if(erro){
            res.status(500).send(`treino do tipo ${req.params.tipo} nao encontrado`)
        }
        res.json(result)
    })
})



//post treino create
app.post('/api/treino', (req, res)=>{
    const { data, tipo, exercicios } = req.body;
    const exerciciosJSON = JSON.stringify(exercicios)


    db.query('INSERT INTO treino (data, tipo, exercicios) VALUES (?, ?, ?)', [data, tipo, exerciciosJSON], (erro, result) => {
        if(erro){
            res.status(500).send('erro')
            return
        }

        res.json({id: result.insertId, data,tipo, exercicios})
    })
})



//post delet treino
app.post('/api/treino/delet/:id', (req, res)=>[
    db.query(`DELETE FROM treino WHERE id = ?`,[req.params.id], (erro, result)=>{
        if(erro){
            res.status(500).send('erro para excluir')
            return
        }

        if(result.affectedRows === 0){
            res.status(404).send('treino nao encontrado')
            return;
        }
        res.status(204).send()
    })
])



app.listen(port, ()=>{
    console.log('Servidor iniciado')
})
