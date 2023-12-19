import express from 'express'
import bodyParser from 'body-parser'
import db from './db.js'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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


app.post('/api/login', (req, res) => {
    let { usuario, senha } = req.body;
  
    db.query('SELECT * FROM users WHERE usuario = ?', [usuario], async (erro, result) => {
      if (erro || result.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      let storeHash = result[0].senha;
  
      if (storeHash === senha) {
        const { id, usuario, nome } = result[0];
        const token = jwt.sign({ id: result[0].id, usuario: result[0].usuario }, 'chave_secreta', { expiresIn: '1h' });
  
        return res.json({ message: 'Login successful', token, usuario, nome });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  });



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
app.post('/api/treino/delet/:id', (req, res)=>{
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
})


app.put('/api/treino/edit/:id', (req, res) => {
    const { id } = req.params;
    const { data, tipo, exercicios } = req.body;
  
    // Atualiza os dados no MySQL usando a chave primária (id)
    db.query(
      'UPDATE treino SET data = ?, tipo = ?, exercicios = ? WHERE id = ?',
      [data, tipo, JSON.stringify(exercicios), id],
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Erro ao atualizar dados no MySQL' });
          return;
        }
  
        // Verifica se algum registro foi atualizado
        if (results.affectedRows === 0) {
          res.status(404).json({ error: 'Registro não encontrado' });
          return;
        }
  
        res.json({ mensagem: 'Dados atualizados com sucesso' });
      }
    );
  });


app.listen(port, ()=>{
    console.log('Servidor iniciado')
})
