import axios from "axios"


const useDeleteTreino = ()=>{
    const handleDelete = async(url)=>{
        const response = await axios.post(url)
    }

    return handleDelete
}


export default useDeleteTreino