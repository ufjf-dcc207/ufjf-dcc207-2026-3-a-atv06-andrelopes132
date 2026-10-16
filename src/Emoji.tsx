import { useState } from "react";
import "./Emoji.css"
import Vida from "./Vida";
import type { AtributoType, EMOJI_KEYS, EmojiType } from "./Types";

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😀"],
    ["sick", "🤒​"],
    ["dead", "😵"],
]);

export default function Emoji(){

    const [emoji, setEmoji] = useState<EmojiType>({
        vida: 5,
        comida: 3,
        agua: 2,
        energia: 1,
        luz: true
    })

    function alimentar(){
        if (emoji.vida === 0) return;
        setEmoji({...emoji, comida: Math.min(5, emoji.comida+1) as AtributoType});
    }
    
    function hidratar(){
        if (emoji.vida === 0) return;
        setEmoji({...emoji, agua: Math.min(5, emoji.agua+1) as AtributoType});
    }

    function alterarLuz(){
        setEmoji({...emoji, luz: !(emoji.luz)});
    }

    function cicleClick(){
        // if (emoji.vida === 0) return;
        // setEmoji({...emoji, agua: Math.max(0, emoji.agua-1) as AtributoType});
        // setComida(Math.max(0, comida-1));

        // if (comida === 0)    setVida((prevVida) => Math.max(0, prevVida-1));
        // if (agua === 0)      setVida((prevVida) => Math.max(0, prevVida-1));
        // if (energia === 0)   setVida((prevVida) => Math.max(0, prevVida-1));

        // if (luz) setEnergia(Math.max(0, energia - 1));    
        // else setEnergia(Math.min(5, energia + 1));
    }

    let status = EMOJI_MAP.get("happy");
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0) status = EMOJI_MAP.get("sick");
    if (emoji.vida === 0) status = EMOJI_MAP.get("dead"); 

    return (
        <div className="emoji">
            <div className="face">
                {status}
            </div>

            <div className="atributos">
                <Vida emoji="❤️" valor={emoji.vida}/>
                <Vida emoji="🍗​" valor={emoji.comida}/>
                <Vida emoji="💧​​" valor={emoji.agua}/>
                <Vida emoji="⚡"  valor={emoji.energia}/>
                {emoji.luz && "💡"}
            </div>

            <div className="acoes">
                <button onClick={alimentar}>Alimentar</button>
                <button onClick={hidratar}>Hidratar</button>
                <button onClick={alterarLuz}>{emoji.luz ? "Desligar" : "Ligar"} Luz</button>
                <br/>
                <button onClick={cicleClick}>Ciclo</button>
            </div>
        </div>
        
    )
}
