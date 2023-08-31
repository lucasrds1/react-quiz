
import { Perguntas } from "@/app/types/Perguntas"
import { useState } from "react"
type Props = {
    perguntasResp: Perguntas[],
    respostasResp: number[]
}
export const Resultados = ({perguntasResp, respostasResp}:Props)=>{
    
    
    return(
        <div>
            <div className="text-3xl font-bold mb-5">Resultados</div>
            <div>
                {perguntasResp.map((item, key) =>(
                    <div key={key} className="mb-3">
                        <div className="font-bold">{key+1}. {item.pergunta}</div>
                        <div>
                            <span>{item.resposta === respostasResp[key] ? '(Acertou) - ' : '(Errou) - ' }</span>
                            {item.opcoes[item.resposta]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}