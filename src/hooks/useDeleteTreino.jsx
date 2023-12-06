import axios from "axios"


const useDeleteTreino = ()=>{
    const handleDelete = async(id)=>{
        const response = await axios.post(`http://localhost:3001/api/treino/delet/${id}`)
    }

    return handleDelete
}


export default useDeleteTreino