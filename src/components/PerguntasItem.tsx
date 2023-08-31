import { Perguntas } from "@/app/types/Perguntas"
import { useState } from "react"
type Props = {
    pergunta: Perguntas,
    count: number,
    aoResponder: (resposta: number)=>void,
    cond: boolean
}
export const PerguntasItem = ({pergunta, count, aoResponder, cond}:Props)=>{
    const [respostaSelected, setRespostaSelected] = useState<number|null>(null)//1
    
    function checkResposta(key: number){//3
        if(respostaSelected === null){
            setRespostaSelected(key)
            setTimeout(()=>{
                aoResponder(key);
                setRespostaSelected(null)
            }, 1500)
            
        }
    }
    
    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {pergunta.pergunta}</div>
            <div>
                {pergunta.opcoes.map((item, key)=>(
                    <div 
                    key={key}
                    onClick={()=>checkResposta(key)}//2
                    className={`border px-3 py-2 rounded-md text-l mb-4  bg-gray-100
                        ${respostaSelected !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                        ${respostaSelected !== null && respostaSelected === pergunta.resposta && respostaSelected === key ? 'bg-green-100' : ''}
                        ${respostaSelected !== null && respostaSelected !== pergunta.resposta && respostaSelected === key ? 'bg-red-100' : ''}

                    `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}