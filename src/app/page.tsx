"use client"

import { PerguntasItem } from "@/components/PerguntasItem";
import { dataQuiz } from "./data/dataQuiz";
import react, { FormEvent, useState } from "react";
import { Resultados } from "@/components/Resultados";

const Page = () =>{
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [passa, setPassa] = useState(false);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [mostraResultados, setMostraResultados] = useState(false)

  const respondendo = (resposta:number)=>{
    setRespostas([...respostas, resposta]);
    loadProxPergunta();
  }
  function loadProxPergunta(){
    if(dataQuiz[perguntaAtual+1]){
      setPerguntaAtual(perguntaAtual+1);
    }else{
      setMostraResultados(true);
    }
  }

  const reload = ()=>{
    setPerguntaAtual(0);
    setRespostas([]);
    setMostraResultados(false);
  }

  return (
    <div className="min-h-screen p-5 bg-black text-white mx-auto ">
      <h1 className="text-center text-5xl">Quiz de Futebol</h1>
      <div className="w-2/4 bg-white rounded-md m-auto mt-20 text-black p-8">
        <div className="p-5">
          {!mostraResultados && 
            <PerguntasItem
            pergunta={dataQuiz[perguntaAtual]}
            count={perguntaAtual+1}
            aoResponder={respondendo}
            cond={passa}
            />
          }
          {mostraResultados == true && 
           <Resultados
           perguntasResp={dataQuiz}
           respostasResp={respostas}
           />
          }
          
        </div>
        <div className="p-5 text-center border-t border-gray-300">
        {!mostraResultados && 
          `${perguntaAtual+1} de ${dataQuiz.length} pergunta(s)`
        }
        {mostraResultados && 
          <button onClick={reload} className="px-3 py-2 rounded-md bg-sky-700 text-white">Recomeçar</button>
        }
        </div>
      </div>
    </div>
  );
}
export default Page;