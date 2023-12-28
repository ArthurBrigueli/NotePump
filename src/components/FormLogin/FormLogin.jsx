import { useContext, useState } from 'react'
import styles from './formLogin.module.css'

const FormLogin = ()=>{

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    
    


    const handleSubmit = async(e)=>{
        e.preventDefault()
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