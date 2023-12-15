import styles from './Login.module.css'



const Login = ()=>{
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.containerInput}>
                    <input type="text" name="usuario" id="usuario" placeholder='Usuario'/>
                    <input type="password" name="senha" id="senha" placeholder='Senha'/>
                </div>
                <div className={styles.containerBtn}>
                    <input type="submit" value="Login" />
                </div>
            </div>
        </section>
    )
}


export default Login