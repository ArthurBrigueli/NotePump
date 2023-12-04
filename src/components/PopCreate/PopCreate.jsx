import { useState } from 'react'
import styles from './PopCreate.module.css'
import axios from 'axios'


const PopCreate = ({fecharTela, tipoExercicio})=> {


    const [addInput, setAddInput] = useState(1)
    const [nome, setNome] = useState('')
    const [peso, setPeso] = useState(null)
    const [exercicios, setExercicios] = useState([{nome, peso}])
    const [isChecked, setIsChecked] = useState(false)
    const [data, setData]= useState('')


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

    const handleCheckData = ()=>{
        setIsChecked(!isChecked)
        if(!isChecked){
            const data = new Date()
            const formattedDate = `${data.getDate().toString().padStart(2, '0')}/${
                (data.getMonth() + 1).toString().padStart(2, '0')
              }/${data.getFullYear()}`;

            setData(formattedDate)
        }
    }

    const handleData = (e)=>{
        setIsChecked(!isChecked)
        const data = e.split('-')
        const dataFormat = `${data[2]}/${data[1]}/${data[0]}`

        setData(dataFormat)
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
                    <input type="checkbox" name="" id="" checked={isChecked} onChange={handleCheckData}/>
                    <span>Hoje</span>
                </div>
                <span>ou</span>
                <input onChange={(e)=>{handleData(e.target.value)}} type="date" name="" id="" />
            </div>
            <div className={styles.container_add}>
                <div className={styles.container_btn_add}>
                    <button onClick={handleAddInput}>+</button>
                </div>
                <div className={styles.list_add}>
                {[...Array(addInput)].map((_, index) => (
                    <div key={index} className={styles.container_input}>
                        <span>{index+1}.</span>
                        <div className={styles.input}>
                            <input onChange={(e)=>handleInput(index, 'nome', e.target.value)} type="text" name="" id="" placeholder='Nome'/>
                            <input onChange={(e)=>handleInput(index, 'peso', e.target.value)} type="number" name="" id="" placeholder='Peso'/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className={styles.container_btn_salvar}>
                <button onClick={handleAdd}>Salvar</button>
            </div>
        </div>
    )
}


export default PopCreate