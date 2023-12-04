import { useState } from 'react'
import styles from './Treino.module.css'
import axios from 'axios'
import useDeleteTreino from '../../hooks/useDeleteTreino'
import PopEdit from '../PopEdit/PopEdit'

const Treino = ({data, exercicios})=>{

    const [textButton, setTextButton] = useState('x')
    const handleDelete = useDeleteTreino()
    const [editPop, setEditPop] = useState(false)

    const deletar = async(id)=>{
        handleDelete(id)
        console.log('deletado')
    }

    const editar = async()=>{
        setEditPop(!editPop)
    }


    const mouseEnter = ()=>{
        setTextButton('Excluir')
    }

    const mouseLeave = ()=>{
        setTextButton('x')
    }




    return(
        <div className={styles.container_treino}>
            {editPop && (
                <PopEdit data={data} fecharTela={editar}/>
            )}
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
            
           <div className={styles.container_btn_op}>
                <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={()=> {deletar(data.id)}} className={styles.botaoDeletar}>{textButton}</button>
                <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={()=> {editar()}} className={styles.botaoEditar}>Editar</button>
           </div>

        </div>
    )
}


export default Treino