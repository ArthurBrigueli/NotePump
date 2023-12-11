import styles from './NoteTreino.module.css'
import Treino from '../Treino/Treino'
import useTreino from '../../hooks/useTreino'
import { useState } from 'react'
import PopCreate from '../PopCreate/PopCreate'

const NoteTreino = ({tipo})=> {

    const {data} = useTreino(`http://localhost:3001/api/treino/tipo/${tipo}`, tipo)

    const [create, setCreate] = useState(false)

    const abrirTela = ()=>{
        setCreate(true)
    }

    const fecharTela = ()=>{
        setCreate(false)
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_opcao}>
                <button className={styles.btn} value={tipo} onClick={abrirTela}>Adicionar</button>
                <span>{tipo}</span>
                {create && (
                    <PopCreate fecharTela={fecharTela} tipoExercicio={tipo}/>
                )}
            </div>
            <div className={styles.container_lista}>
                {data.map((item, index)=>(
                    <Treino key={index} data={item} exercicios={item.exercicios}/>
                ))}
                
            </div>
        </div>
    )
}


export default NoteTreino