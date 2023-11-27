import styles from './Treino.module.css'


const Treino = ({data, exercicios})=>{


    return(
        <div className={styles.container_treino}>
            <div className={styles.container_data_treino}>
                <span>{data.data}</span>
            </div>

            <div className={styles.container_exercicios}>
                
                {exercicios.map((item, index)=>(
                    <div key={index} className={styles.container_exercicio}>
                        <span>{item.nome}</span>
                        <span>{item.peso}KG</span>
                    </div>
                ))}
                
            </div>

        </div>
    )
}


export default Treino