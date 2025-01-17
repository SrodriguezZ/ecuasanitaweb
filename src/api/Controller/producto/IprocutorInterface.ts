import { TypeOperacion } from "../../apiResponse"

export interface IOperacionProducto {
    id: number
    nombre: string
    precioUnitario: string
}

export interface IPostProducto extends IListartProducto { }
export interface IPutProducto extends IListartProducto { }

export interface IListartProducto {
    id: number
    nombre: string
    precioUnitario: number
}

export const OperacionProducto: IOperacionProducto = {
    id: 0,
    nombre: "",
    precioUnitario: '',
}

export interface IdataDefaultProductoPage {
    data: IListartProducto[]
    Operacion: IOperacionProducto
    disabled: boolean
    loading: boolean
    modal: boolean
    reiniciarData: boolean
    typeOperacion: TypeOperacion
    validate: boolean
}

export const dataDefaultProductoPage: IdataDefaultProductoPage = {
    data: [],
    Operacion: OperacionProducto,
    disabled: false,
    loading: false,
    modal: false,
    reiniciarData: false,
    typeOperacion: "Agregar",
    validate: false
}