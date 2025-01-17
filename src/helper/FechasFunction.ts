import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};

export const fechaEnEspañol = (date: Date) => {
    return formatDate(date);
    //return format(date, "PPP", { locale: es });
};