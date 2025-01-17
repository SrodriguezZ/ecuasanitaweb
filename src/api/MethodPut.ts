import { AxiosError, AxiosResponse } from "axios";
import { instance } from "./url";

//prettier-ignore
const Put = async <T extends unknown>(endpoint: string, data?: object, authorized: boolean = true, params?: object): Promise<T> => {

    if (authorized) {
        instance.interceptors.request.use((config) => {
            return config;
        });
    }
    return await instance
        .put(endpoint, data, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.log(JSON.stringify(error, null, 3));
            //  ShowAlertApiError(error);
            throw error;
        })
        .finally(() => {
            //    setIsLoading(false);
        });
};

export default Put;