import { TypeOperacion } from "../../apiResponse"
import { IListartClientes } from "../clientes/InterfaceClientes"
import { IListartProducto } from "../producto/IprocutorInterface"

export interface IOperacionFactura {
    id: number
    numeroFactura: string
    fecha: Date | null
    cliente_id: number
    facturaDetalles: IDetalleFactura[]
}

export interface IPostFactura extends Omit<IOperacionFactura, 'fecha'> {
    fecha: Date
}

export interface IPutFactura extends Omit<IOperacionFactura, 'fecha'> {
    fecha: Date
}

export interface IListarFacturas {
    id: number
    numeroFactura: string
    fecha: Date
}

export interface IDetalleFactura {
    id: number
    factura_id: number
    idProducto: number
    cantidad: number
}

export const OperacionFactura: IOperacionFactura = {
    fecha: null,
    id: 0,
    numeroFactura: "",
    cliente_id: 0,
    facturaDetalles: []
}

export interface IdataDefaultFacturaPage {
    data: IListarFacturas[]
    productos: IListartProducto[]
    Operacion: IOperacionFactura
    disabled: boolean
    loading: boolean
    modal: boolean
    reiniciarData: boolean
    typeOperacion: TypeOperacion
    validate: boolean
    cliente: IListartClientes[]
}

export const dataDefaultFacturaPage: IdataDefaultFacturaPage = {
    data: [],
    Operacion: OperacionFactura,
    disabled: false,
    loading: false,
    modal: false,
    reiniciarData: false,
    typeOperacion: "Agregar",
    validate: false,
    productos: [],
    cliente: []
}