import { useState } from "react";

export default function Vida() {
    
    const [valor, setValor] = useState(0); 
    let coracoes = '';

    for(let i = 0; i<5; i++){
        if (i<valor) coracoes += "❤️";
        else coracoes += "🩶​";
    }

    function aumenta(){
        setValor(valor === 5 ? valor : valor + 1);
    }
    function diminui(){
        setValor(valor === 0 ? 0 : valor - 1);
    }
    
    return (
        <>
        <div className="vida">
            <button onClick={diminui}>-</button> {coracoes} <button onClick={aumenta}>+</button>
        </div>
            
        </>
    );
}