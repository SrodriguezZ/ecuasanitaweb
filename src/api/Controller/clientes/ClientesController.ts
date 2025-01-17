import { apiResponse } from "../../apiResponse"
import Delete from "../../MethodDelete"
import Get from "../../Methodget"
import Post from "../../MethodPost"
import Put from "../../MethodPut"
import { URlClientes } from "../../url"
import { IListartClientes, IPostClientes, IPutClientes } from "./InterfaceClientes"

export const UseCLientesController = (): UseCLientesControllerProps => {

    const Listar = async () => {
        try {
            const response = await Get<IListartClientes[]>(URlClientes.listar)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const guardar = async (data: IPostClientes) => {
        try {
            const response = await Post<apiResponse>(URlClientes.guardar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Editar = async (data: IPutClientes) => {
        try {
            const response = await Put<apiResponse>(URlClientes.editar, data)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const Eliminar = async (id: number) => {
        try {
            const response = await Delete<apiResponse>(URlClientes.eliminar, id)
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(e)
        }
    }

    return { Listar, guardar, Editar, Eliminar }
}


interface UseCLientesControllerProps {
    Listar: () => Promise<any>
    guardar: (data: IPostClientes) => Promise<apiResponse>
    Editar: (data: IPutClientes) => Promise<apiResponse>
    Eliminar: (id: number) => Promise<apiResponse>
}