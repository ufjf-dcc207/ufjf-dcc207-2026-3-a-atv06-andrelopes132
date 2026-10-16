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

    let status = EMOJI_MAP.get("happy");
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0) status = EMOJI_MAP.get("sick");
    if (emoji.vida === 0) status = EMOJI_MAP.get("dead");

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
        if (emoji.vida === 0) return;

        const newEmoji = structuredClone(emoji);

        if (newEmoji.comida === 0) newEmoji.vida = Math.max(0, emoji.vida-1) as AtributoType;
        newEmoji.comida = Math.max(0, emoji.comida-1) as AtributoType;
        
        if (newEmoji.agua === 0) newEmoji.vida = Math.max(0, emoji.vida-1) as AtributoType;
        newEmoji.agua = Math.max(0, emoji.agua-1) as AtributoType;
        
        if (newEmoji.energia === 0) newEmoji.vida = Math.max(0, emoji.vida-1) as AtributoType;

        if (newEmoji.luz) newEmoji.energia = Math.max(0, emoji.energia-1) as AtributoType;
        else newEmoji.energia = Math.min(5, emoji.energia+1) as AtributoType;

        setEmoji(newEmoji);

        // if (emoji.comida === 0) setEmoji(
        //     (prevEmoji)=>(
        //         {...prevEmoji, vida: Math.max(0, prevEmoji.vida-1) as AtributoType}
        //     )
        // );
        // setEmoji((prevEmoji) => ({...prevEmoji, comida: Math.max(0, prevEmoji.comida-1) as AtributoType}));

        // if (emoji.agua === 0) setEmoji(
        //     (prevEmoji)=>(
        //         {...prevEmoji, vida: Math.max(0, prevEmoji.vida-1) as AtributoType}
        //     )
        // );
        // setEmoji((prevEmoji) => ({...prevEmoji, agua: Math.max(0, prevEmoji.agua-1) as AtributoType}));

        // if (emoji.energia === 0) setEmoji(
        //     (prevEmoji)=>(
        //         {...prevEmoji, vida: Math.max(0, prevEmoji.vida-1) as AtributoType}
        //     )
        // );
        
        // if (emoji.luz) setEmoji(
        //     (prevEmoji)=>(
        //         {...prevEmoji, luz: !(prevEmoji.luz)}
        //     )
        // );
        // else setEmoji(
        //     (prevEmoji)=>(
        //         {...prevEmoji, vida: Math.min(5, prevEmoji.energia + 1) as AtributoType}
        //     )
        // );
        
    } 

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
