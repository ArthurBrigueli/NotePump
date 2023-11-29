import { useState } from 'react'
import styles from './PopCreate.module.css'


const PopCreate = ({fecharTela})=> {


    const [addInput, setAddInput] = useState(1)


    const handleAddInput = ()=>{
        setAddInput(addInput+1)
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
                    <div className={styles.container_input}>
                        <input type="text" name="" id="" placeholder='Nome'/>
                        <input type="number" name="" id="" placeholder='Peso'/>
                    </div>
                ))}
                </div>
                <button >Salvar</button>
            </div>
        </div>
    )
}


export default PopCreate