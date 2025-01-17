export interface apiResponse {
    message: string
    status: number
    success: boolean
    value: number
}

export type TypeOperacion = 'Agregar' | 'Editar'