// useEditTreino.js
import axios from "axios";
import { useEffect } from "react";

const useEditTreino = (url) => {
  const EditTreino = async (id, data, tipo, exercicios) => {
    try {
      const response = await axios.put(url, {
        data,
        tipo,
        exercicios
      });

      // Adicione lógica adicional conforme necessário, por exemplo, tratamento de resposta
      console.log('foi em');
    } catch (error) {
      console.error("Erro ao editar treino:", error);
    }
  };

  return EditTreino; // Retorna a função EditTreino do hook
};

export default useEditTreino;
