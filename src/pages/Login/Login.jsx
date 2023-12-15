import styles from './Login.module.css'
import imgLogin from '../../img/login-form-img.png'


const Login = ()=>{
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.containerInput}>
                    <h2 className={styles.h2}>Login</h2>
                    <input type="text" name="usuario" id="usuario" placeholder='Usuario'/>
                    <input type="password" name="senha" id="senha" placeholder='Senha'/>
                </div>
                <div className={styles.containerBtn}>
                    <input type="submit" value="Login"/>
                </div>
            </div>

            <div className={styles.container_img}>
                <img src={imgLogin} alt="" />
            </div>
        </section>
    )
}


export default Login