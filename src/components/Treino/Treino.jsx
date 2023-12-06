import styles from './Treino.module.css'
import axios from 'axios'
import deletTreino from '../../hooks/deletTreino'


const Treino = ({data, exercicios})=>{

    const [id, setId] = deletTreino()

    const removeTreino = async()=>{
        setId(data.id)
    }

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
            <button onClick={removeTreino}>X</button>
        </div>
    )
}


export default Treino