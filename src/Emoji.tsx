import { useState } from "react";
import "./Emoji.css"
import Vida from "./Vida";

type EMOJI_KEYS = "happy" | "sick" | "dead";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😀"],
    ["sick", "🤒​"],
    ["dead", "😵"],
]);

export default function Emoji(){
    const [status, setStatus] = useState<EMOJI_KEYS>("happy");
    const [vida, setVida] = useState<number>(4);
    const [comida, setComida] = useState<number>(3);
    const [agua, setAgua] = useState<number>(2);
    const [luz, setLuz] = useState<boolean>(true);
    const [energia, setEnergia] = useState<number>(1);

    function alimentar(){
        setComida(Math.min(5, comida+1));
    }
    
    function hidratar(){
        setAgua(Math.min(5, agua+1));
    }

    function alterarLuz(){
        setLuz(!luz);

    }

    function cicleClick(){
        setAgua(Math.max(0, agua-1));
        setComida(Math.max(0, comida-1));

        if (comida === 0)    setVida((prevVida) => Math.max(0, prevVida-1));
        if (agua === 0)      setVida((prevVida) => Math.max(0, prevVida-1));
        if (energia === 0)   setVida((prevVida) => Math.max(0, prevVida-1));

        if (luz) setEnergia(Math.max(0, energia - 1));    
        else setEnergia(Math.min(5, energia + 1));
    }

    

    return (
        <div className="emoji">
            <div className="face">
                {EMOJI_MAP.get(status) || "🫥​"}
            </div>

            <div className="atributos">
                <Vida emoji="❤️" valor={vida}/>
                <Vida emoji="🍗​" valor={comida}/>
                <Vida emoji="💧​​" valor={agua}/>
                <Vida emoji="⚡" valor={energia}/>
                {luz && "💡"}
            </div>

            <div className="acoes">
                <button onClick={alimentar}>Alimentar</button>
                <button onClick={hidratar}>Hidratar</button>
                <button onClick={alterarLuz}>{luz ? "Desligar" : "Ligar"} Luz</button>
                <br/>
                <button onClick={cicleClick}>Ciclo</button>
            </div>
        </div>
        
    )
}
