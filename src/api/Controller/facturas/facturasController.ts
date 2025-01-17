import { apiResponse } from "../../apiResponse"
import Delete from "../../MethodDelete"
import Get from "../../Methodget"
import Post from "../../MethodPost"
import Put from "../../MethodPut"
import { URlFactura } from "../../url"
import { IListarFacturas, IPostFactura, IPutFactura, } from "./Interfacefacturas"

export const UseFacturaController = (): UseFacturaControllerProps => {

    const Listar = async () => {
        try {
            const response = await Get<IListarFacturas[]>(URlFactura.listar)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const guardar = async (data: IPostFactura) => {
        try {
            const response = await Post<apiResponse>(URlFactura.guardar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Editar = async (data: IPutFactura) => {
        try {
            const response = await Put<apiResponse>(URlFactura.editar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Eliminar = async (id: number) => {
        try {
            const response = await Delete<apiResponse>(URlFactura.eliminar, id)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    return { Listar, guardar, Editar, Eliminar }
}


interface UseFacturaControllerProps {
    Listar: () => Promise<IListarFacturas[]>
    guardar: (data: IPostFactura) => Promise<apiResponse>
    Editar: (data: IPutFactura) => Promise<apiResponse>
    Eliminar: (id: number) => Promise<apiResponse>
}