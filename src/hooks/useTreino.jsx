import { useEffect, useState } from "react"
import axios from "axios"

const useTreino = (tipo)=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetch = async()=>{

            let api = "http://localhost:3001/api/treino"

            if(tipo){
                api = `http://localhost:3001/api/treino/tipo/${tipo}`
            }

            const data = await axios.get(api)
            setData(data.data)
        }
        fetch()
    }, [data])
    return [data]
}


export default useTreino
