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
    const [status, setStatus] = useState<EMOJI_KEYS>("sick")

    function happyClick(){
        setStatus("happy");
    }
    
    function sickClick(){
        setStatus("sick");
    }

    function deadClick(){
        setStatus("dead");
    }

    function cicleClick(){
        // if (status == "happy") setStatus("sick");
        // if (status == "sick") setStatus("dead");
        // if (status == "dead") setStatus("happy");

        switch(status){
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
        }

    }

    return (
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || "🫥​"}
            </div>

            <Vida/>

            <div className="acoes">
                <button onClick={happyClick}>HAPPY</button>
                <button onClick={sickClick}>SICK</button>
                <button onClick={deadClick}>DEAD</button>
                <br/>
                <button onClick={cicleClick}>PROXIMO</button>
            </div>
        </>
        
    )
}