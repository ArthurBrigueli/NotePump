import { useState } from 'react'
import styles from './PopCreate.module.css'
import axios from 'axios'


const PopCreate = ({fecharTela, tipoExercicio})=> {


    const [addInput, setAddInput] = useState(1)
    const [nome, setNome] = useState('')
    const [peso, setPeso] = useState(null)
    const [exercicios, setExercicios] = useState([{nome, peso}])
    const [data, setData]= useState('18/02/2004')


    const handleAddInput = ()=>{
        setExercicios([...exercicios, {nome, peso}]);
        setAddInput(addInput+1)
        setNome('')
        setPeso('')
    }

    const handleAdd = async()=>{
        fecharTela()
        await axios.post('http://localhost:3001/api/treino', {
            data,
            tipo: tipoExercicio,
            exercicios
        })
    }


    const handleInput = (index, propriedade, valor) => {
        const novoArray = [...exercicios]
        novoArray[index][propriedade] = valor
        setExercicios(novoArray)
    }


    return(
        <div className={styles.container}>
            <button onClick={fecharTela} className={styles.btnFechar}>X</button>
            <div className={styles.container_hora}>
                <div className={styles.hora}>
                    <input type="checkbox" name="" id="" />
                    <span>Hoje</span>
                </div>
                <span>ou</span>
                <input type="date" name="" id="" />
            </div>
            <div className={styles.container_add}>
                <button onClick={handleAddInput}>+</button>
                <div className={styles.list_add}>
                {[...Array(addInput)].map((_, index) => (
                    <div key={index} className={styles.container_input}>
                        <input onChange={(e)=>handleInput(index, 'nome', e.target.value)} type="text" name="" id="" placeholder='Nome'/>
                        <input onChange={(e)=>handleInput(index, 'peso', e.target.value)} type="number" name="" id="" placeholder='Peso'/>
                    </div>
                ))}
                </div>
                <button onClick={handleAdd}>Salvar</button>
            </div>
        </div>
    )
}


export default PopCreate