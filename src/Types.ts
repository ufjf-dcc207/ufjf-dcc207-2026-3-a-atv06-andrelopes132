export type EMOJI_KEYS = "happy" | "sick" | "dead";

export type AtributoType = 0 | 1 | 2 | 3 | 4 | 5;

export type EmojiType = {
    vida: AtributoType;
    comida: AtributoType;
    agua: AtributoType;
    energia: AtributoType;
    luz: boolean;
}