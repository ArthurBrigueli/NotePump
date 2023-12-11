import { useState } from "react";
import axios from "axios";



const useAddTreino = (url)=>{
    const handleAdd = async(data, tipo, exercicios)=>{
        const response = await axios.post(url, {
            data: data,
            tipo: tipo,
            exercicios: exercicios
        })
    }
    return handleAdd
}


export default useAddTreino