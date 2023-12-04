import { useState } from 'react'
import styles from './Treino.module.css'
import axios from 'axios'
import useDeleteTreino from '../../hooks/useDeleteTreino'


const Treino = ({data, exercicios})=>{

    const [textButton, setTextButton] = useState('x')
    const handleDelete = useDeleteTreino()

    const deletar = async(id)=>{
        handleDelete(id)
        console.log('deletado')
    }


    const mouseEnter = ()=>{
        setTextButton('Excluir')
    }

    const mouseLeave = ()=>{
        setTextButton('x')
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
            
            <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={()=> {deletar(data.id)}} className={styles.botaoDeletar}>{textButton}</button>

        </div>
    )
}


export default Treino