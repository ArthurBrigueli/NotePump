import styles from './PopCreate.module.css'


const PopCreate = ({fecharTela})=> {
    return(
        <div className={styles.container}>
            <button className={styles.btn_fechar} onClick={fecharTela}>X</button>
        </div>
    )
}


export default PopCreate