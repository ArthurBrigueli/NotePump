import { useEffect, useState } from "react"
import axios from "axios"

const useTreino = (url)=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            const json = await axios.get(url)
            setData(json.data)
        }
        fetchData()
    }, [url])
    return {data}
}


export default useTreino
