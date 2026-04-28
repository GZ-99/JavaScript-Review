export class Currency {
    static #VALID_CODE = ['USD', 'JPY', 'EUR', 'GBP']
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODE.includes(code)) { //Si no es uno de los valores de #VALID_CODE
            throw new Error(`Invalid Currency code: ${code}. Must be one of ${Currency.#VALID_CODE.join(', ')}`);
        } // (', ') = Esto es para mostrar todos los valores de #VALID_CODE
    }
} //# = Privado
