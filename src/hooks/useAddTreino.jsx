import { useState } from "react";
import axios from "axios";



const useAddTreino = ()=>{
    const handleAdd = async(data, tipo, exercicios)=>{
        const response = await axios.post('http://localhost:3001/api/treino', {
            data: data,
            tipo: tipo,
            exercicios: exercicios
        })
    }
    return handleAdd
}


export default useAddTreino