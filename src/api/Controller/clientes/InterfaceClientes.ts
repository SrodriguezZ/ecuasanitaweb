import { TypeOperacion } from "../../apiResponse"

export interface IOperacionClientes {
    id: number
    nombre: string
    email: string
    telefono: string
    password: string
}

export interface IPostClientes extends IOperacionClientes { }
export interface IPutClientes extends IOperacionClientes { }

export interface IListartClientes extends IOperacionClientes { }

export const OperacionClientes: IOperacionClientes = {
    id: 0,
    nombre: "",
    email: "",
    telefono: "",
    password: "",
}

export interface IdataDefaultClientesPage {
    data: IListartClientes[]
    Operacion: IOperacionClientes
    disabled: boolean
    loading: boolean
    modal: boolean
    reiniciarData: boolean
    typeOperacion: TypeOperacion
    validate: boolean
}

export const dataDefaultClientesPage: IdataDefaultClientesPage = {
    data: [],
    Operacion: OperacionClientes,
    disabled: false,
    loading: false,
    modal: false,
    reiniciarData: false,
    typeOperacion: "Agregar",
    validate: false
}