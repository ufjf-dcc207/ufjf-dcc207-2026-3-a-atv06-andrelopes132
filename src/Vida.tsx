import "./Vida.css"

type emojiProps = {
    emoji: string;
    valor: number;
}

export default function Vida({emoji, valor} : emojiProps) { 
    return (
        <>
            <div className="vida">
                <span className="ativo">{emoji.repeat(valor)}</span>
                <span className="inativo">{emoji.repeat(5-valor)} </span>
            </div>    
        </>
    );
}
