
import { TokenApp, TokenResponseApi } from "../api/Controller/seguridad/interfaceAuthController";
import { useBaseStorage } from "./useBaseStorage";
const keyStorage = {
    token: "Sas-auth-token",
};
export const useStorage = () => {
    const { SaveData, GetData, RemoveData } = useBaseStorage();

    const SaveToken = (data: TokenResponseApi) => {
        const adapter: TokenResponseApi = {
            message: data.message,
            status: data.status,
            success: data.success,
            value: data.value
        };
        SaveData(adapter, keyStorage.token);
    };

    const GetToken = (): TokenResponseApi => GetData<TokenResponseApi>(keyStorage.token);

    const RemoveToken = () => {
        RemoveData(keyStorage.token);
    };

    return {
        SaveToken,
        GetToken,
        RemoveToken,
    };
};