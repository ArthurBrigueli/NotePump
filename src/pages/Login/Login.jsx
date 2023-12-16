import styles from './Login.module.css'
import imgLogin from '../../img/login-form-img.png'
import FormLogin from '../../components/formLogin/FormLogin'


const Login = ()=>{
    return(
        <section className={styles.section}>
            <FormLogin/>
            <div className={styles.container_img}>
                <img src={imgLogin} alt="" />
            </div>
        </section>
    )
}


export default Login