export interface LoginPostApp {
    email: string;
    password: string;
}

export const valuedefaultLoginPost: LoginPostApp = {
    email: "",
    password: "",
};

export interface TokenApp {
    idUser: number;
    userName: string;
    email: string;

}

export interface IdetailResponseApi extends TokenApp { }
export interface TokenResponseApi {
    message: string,
    status: number,
    success: boolean,
    value: number,
}

export interface ILogin extends LoginPostApp {
    loading: boolean;
    err: string;
    disabled: boolean;
    validate: boolean | undefined;
}

export const LoginDataDefualt: ILogin = {
    email: "",
    password: "",
    loading: false,
    err: "",
    disabled: false,
    validate: undefined,
};

export interface IRoles {
    idRoluser: number;
    nombreRolUser: string;
    nombreUsuario: string;
    nombreEmpresa: String;
    idSucursal: number;
    isGlobal: boolean;
    permisosUser: number[];
    idPlanCompany: number;
    nombrePlan: string;
    permisosCompany: number[];
}