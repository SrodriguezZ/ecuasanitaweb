import { formatNumeral, unformatNumeral } from "cleave-zen";

export const ConvertirDecimal_a_Moneda = (value: string) => {
    return formatNumeral(value);
};

export const UnFormatCash_o_decimal = (value: string) => {
    return unformatNumeral(value);
};