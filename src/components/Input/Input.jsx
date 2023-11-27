import styles from 'Input.module.css'

const Input = ()=>{
    return(
        <div className={styles.container}>
            <input type="text" name="" id="" placeholder="Nome"/>
            <input type="number" name="" id="" placeholder="Peso"/>
        </div>
    )
}


export default Input