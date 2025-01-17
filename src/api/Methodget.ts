import { AxiosError, AxiosResponse } from "axios";
import { instance } from "./url";


const Get = async <T extends unknown>(endpoint: string, authorized: boolean = true, params?: object): Promise<T> => {

    if (authorized) {
        instance.interceptors.request.use((config) => {
            return config;
        });
    }

    return await instance
        .get(endpoint, { params })
        .then(({ data }: AxiosResponse<T>) => data)
        .catch((error: AxiosError<any>) => {
            console.log(JSON.stringify(error, null, 3));
            // ShowAlertApiError(error);
            throw error;
        });
    // .finally(() => {
    //    setIsLoading(false);
    // });
};

export default Get;