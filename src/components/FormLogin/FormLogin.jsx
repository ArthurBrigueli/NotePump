import { useContext, useState } from 'react'
import styles from './formLogin.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'

const FormLogin = ()=>{

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()
    const { login } = useAuth();

    
    


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3001/api/login', { usuario, senha });
            const { message, token } = response.data;
      
            login(token);
            navigate('/NotePump')
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    }

    return(
        <form onSubmit={handleSubmit} method='POST'  className={styles.container}>
            <div className={styles.containerInput}>
                <h2 className={styles.h2}>Login</h2>
                <input type="text" name="usuario" id="usuario" placeholder='Usuario' onChange={(e)=>{setUsuario(e.target.value)}}/>
                <input type="password" name="senha" id="senha" placeholder='Senha' onChange={(e)=>{setSenha(e.target.value)}}/>
            </div>
            <div className={styles.containerBtn}>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}


export default FormLogin