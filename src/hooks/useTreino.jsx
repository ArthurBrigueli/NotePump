import { useEffect, useState } from "react"
import axios from "axios"

const useTreino = (url)=>{

    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(()=>{
        const fetchData = async()=>{
            const json = await axios.get(url)
            setData(json.data)
        }
        fetchData()
    }, [update])
    return {data, setUpdate}
}


export default useTreino
