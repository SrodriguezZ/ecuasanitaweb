import { apiResponse } from "../../apiResponse"
import Delete from "../../MethodDelete"
import Get from "../../Methodget"
import Post from "../../MethodPost"
import Put from "../../MethodPut"
import { URlProducto } from "../../url"
import { IListartProducto, IPostProducto, IPutProducto } from "./IprocutorInterface"

export const UseProductoController = (): UseProductoControllerProps => {

    const Listar = async () => {
        try {
            const response = await Get<IListartProducto[]>(URlProducto.listar)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const guardar = async (data: IPostProducto) => {
        try {
            const response = await Post<apiResponse>(URlProducto.guardar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Editar = async (data: IPutProducto) => {
        try {
            const response = await Put<apiResponse>(URlProducto.editar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Eliminar = async (id: number) => {
        try {
            const response = await Delete<apiResponse>(URlProducto.eliminar, id)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    return { Listar, guardar, Editar, Eliminar }
}


interface UseProductoControllerProps {
    Listar: () => Promise<IListartProducto[]>
    guardar: (data: IPostProducto) => Promise<apiResponse>
    Editar: (data: IPutProducto) => Promise<apiResponse>
    Eliminar: (id: number) => Promise<apiResponse>
}