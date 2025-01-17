//prettier-ignore
//prettier-ignore
import { URlLogin } from "../../url";
import Post from "../../MethodPost";
import { LoginPostApp, TokenApp, TokenResponseApi } from "./interfaceAuthController";
import { useStorage } from "../../../data/useStorage";

export interface LoginPostApi {
    email: string;
    password: string;
};

export const useAuth = (): UseLogin => {
    const { SaveToken, GetToken, RemoveToken } = useStorage();

    const setLogin = async (viewModel: LoginPostApp) => {
        try {
            //prettier-ignore
            const response: TokenResponseApi = await Post<TokenResponseApi>(URlLogin.login,
                {
                    email: viewModel.email,
                    password: viewModel.password,
                },
                false
            );

            if (response.success && response.status === 200) {
                SaveToken(response);
                return Promise.resolve(response);
            }
        } catch (err: unknown) {
            return Promise.reject(err);
        }
    };




    const getLogin = () => GetToken();

    const removeLogin = () => RemoveToken();

    return { getLogin, setLogin, removeLogin };
};

interface UseLogin {
    // login: LoginPostApi[];
    getLogin: () => TokenResponseApi;
    setLogin: (viewModel: LoginPostApp) => Promise<any>;
    removeLogin: () => void;

}