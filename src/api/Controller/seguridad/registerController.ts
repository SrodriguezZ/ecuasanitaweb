
import Post from "../../MethodPost";
import { URlLogin } from "../../url";
import { TokenResponseApi } from "./interfaceAuthController";

export interface RegisterPostApi {
    nombre: string
    email: string
    telefono: string
    password: string
}

export const useRegister = (): UseRegister => {
    const setRegister = async (viewModel: RegisterPostApi) => {
        try {
            //prettier-ignore
            const response: TokenResponseApi = await Post<TokenResponseApi>(URlLogin.register, viewModel);
            console.log(response)
            return Promise.resolve(response);
        } catch (err) {
            return Promise.reject(err);
        }
    };
    return { setRegister };
};

interface UseRegister {
    setRegister: (viewModel: RegisterPostApi) => Promise<TokenResponseApi>;
}