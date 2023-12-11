import { useEffect, useState } from "react"
import axios from "axios"

const useTreino = (url, tipo)=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const json = await axios.get(url)
            setData(json.data)
        }
        fetchData()
    }, [tipo])
    return {data}
}


export default useTreino
