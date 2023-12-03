import styles from './Treino.module.css'
import axios from 'axios'


const Treino = ({data, exercicios})=>{


    const deletar = async(id)=>{
        await axios.post(`http://localhost:3001/api/treino/delet/${id}`)
        console.log('deletado')
    }


    return(
        <div className={styles.container_treino}>
            <div className={styles.container_exercicioo}>
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
            
            <button onClick={()=> {deletar(data.id)}} className={styles.botaoDeletar}>X</button>

        </div>
    )
}


export default Treino