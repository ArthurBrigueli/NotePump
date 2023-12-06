import { useEffect, useState } from "react"
import axios from "axios"

const deletTreino = ()=>{

    const [id, setId] = useState()


    useEffect(()=>{
        const delet = async()=>{
            await axios.post(`http://localhost:3001/api/treino/delet/${id}`)
        }

        delet()
    }, [id])
}


export default deletTreino