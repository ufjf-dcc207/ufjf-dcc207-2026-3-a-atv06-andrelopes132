import { useState } from "react";
import "./Vida.css"

type emojiProps = {
    emoji: string;
}

export default function Vida({emoji} : emojiProps) {
    
    const [valor, setValor] = useState(0); 

    // let coracoes = '';

    // for(let i = 0; i<5; i++){
    //     if (i<valor) coracoes += "❤️";
    //     else coracoes += "🩶​";
    // }

    function aumenta(){
        setValor(updateValor);
        setValor(updateValor);
        // setValor((v) => {
        //     if (v === 5) return v;
        //     else return v + 1;
        // });
        // setValor((prevValor) => {
        //     if (prevValor === 5) return prevValor;
        //     else return prevValor + 1;
        // });
        // setValor(valor === 5 ? valor : valor + 1);
    }
    function diminui(){
        setValor(valor === 0 ? 0 : valor - 1);
    }
    
    return (
        <>
            <div className="vida">
                <button onClick={diminui}> - </button>  
                    <span className="ativo">{emoji.repeat(valor)}</span>
                    <span className="inativo">{emoji.repeat(5-valor)} </span>
                <button onClick={aumenta}> + </button>
            </div>    
        </>
    );
}

function updateValor(prevValor : number){
    if (prevValor === 5) return prevValor;
    else return prevValor + 1;
}