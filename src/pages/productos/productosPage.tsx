import { useCallback, useEffect } from "react";
import { useFillData } from "../../Hooks/useFilldata";
import CrudTablet from "../../Components/Components/crudTablet/CrudTablet";
import { ModalPrincipal } from "../../Components/Components/ModalPrincipal";
import Input from "../../Components/Components/Input";
import { Button, Form } from "react-bootstrap";
import { alertglobal } from "../../Components/Components/sweertAlert/sweertAlert";
import { dataDefaultProductoPage, IdataDefaultProductoPage, IOperacionProducto, IPostProducto, IPutProducto } from "../../api/Controller/producto/IprocutorInterface";
import { UseProductoController } from "../../api/Controller/producto/prodcutorContoller";
import { ConvertirDecimal_a_Moneda, UnFormatCash_o_decimal } from "../../helper/ConverDecimalAMoneda";

const ProductoPage = () => {
    const Producto = UseProductoController()
    const data = useFillData<IdataDefaultProductoPage>(dataDefaultProductoPage)

    const ListarProducto = useCallback(async () => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Producto.Listar()
            data.updateData(response, 'data')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }, [data.data.reiniciarData])

    useEffect(() => {
        ListarProducto()
    }, [ListarProducto])

    const handleAdd = async () => {
        const NewData: IOperacionProducto = {
            id: 0,
            nombre: "",
            precioUnitario: ""
        }
        data.updateData('Agregar', 'typeOperacion')
        data.updateData(NewData, 'Operacion')
        data.updateData(true, 'modal')
    }

    const handleEdit = (id: number) => {
        const ObjectSelect = data.data.data.find((e) => e.id === id)
        const NewData: IOperacionProducto = {
            id: ObjectSelect?.id || 0,
            nombre: ObjectSelect?.nombre || '',
            precioUnitario: ConvertirDecimal_a_Moneda(String(ObjectSelect?.precioUnitario)) || '',
        }
        data.updateData('Editar', 'typeOperacion')
        data.updateData(NewData, 'Operacion')
        data.updateData(true, 'modal')
    }

    const RenderChangeOperacion = (value: string, field: keyof IOperacionProducto) => {
        const RenderData = data.data.Operacion
        RenderData[field] = value as never
        data.updateData(RenderData, 'Operacion')
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            data.updateData(true, 'validate');
        } else {
            e.preventDefault();
            data.updateData(true, 'disabled')
            data.updateData(false, 'validate');
            onclickOperacion();
        }
    };

    const onclickOperacion = () => {

        const NewData: IPostProducto = {
            id: data.data.Operacion.id,
            nombre: data.data.Operacion.nombre,
            precioUnitario: Number(UnFormatCash_o_decimal(data.data.Operacion.precioUnitario))
        }

        if (data.data.typeOperacion === "Agregar") {
            renderAdd(NewData)
        }
        if (data.data.typeOperacion === 'Editar') {
            renderEdit(NewData)
        }
    }

    const renderAdd = async (Send: IPostProducto) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Producto.guardar(Send)
            data.updateData(!data.data.reiniciarData, 'reiniciarData')
            alertglobal('info', response.message, 'info')
            data.updateData(false, 'modal')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }

    const renderEdit = async (Send: IPutProducto) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Producto.Editar(Send)
            alertglobal('info', response.message, 'info')
            data.updateData(!data.data.reiniciarData, 'reiniciarData')
            data.updateData(false, 'modal')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }

    const HandleDelete = async (id: number) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Producto.Eliminar(id)
            data.updateData(!data.data.reiniciarData, 'reiniciarData')
            alertglobal('info', response.message, 'info')
            data.updateData(false, 'modal')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }

    return (

        <>
            <CrudTablet
                tittle={""}
                active={""}
                ChangeLoading={data.data.loading}
                tittleButton='Agregar Producto'
                hiddenButton
                onclickButtonPrimary={() => handleAdd()}
                data={data.data.data.map((e) => {
                    return {
                        'id': e.id || 0,
                        'Nombre': e.nombre || '',
                        'Precio Unitario ': e.precioUnitario ? ConvertirDecimal_a_Moneda(String(e.precioUnitario)) : '',
                    }
                })}
                NotViewData={["id"]}
                hiddenDelete
                onClickDelete={(e) => HandleDelete(e["id"])}
                hiddenEdit
                onClickEdit={(e) => handleEdit(e["id"])}
            />

            <ModalPrincipal
                open={data.data.modal}
                setOpen={(e) => data.updateData(e, 'modal')}
                children={
                    <>
                        <Form className="form-horizontal" noValidate validated={data.data.validate} onSubmit={handleSubmit}>

                            <Input
                                className="mb-4"
                                label="Nombre"
                                placeholder="Nombre"
                                value={data.data.Operacion.nombre || ''}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value, 'nombre')}
                                required
                            />

                            <Input
                                className="mb-4"
                                label="Precio Unitario"
                                placeholder="Precio Unitario"
                                value={data.data.Operacion.precioUnitario}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(ConvertirDecimal_a_Moneda(value), 'precioUnitario')}
                                required
                            />

                            <Button className="me-2" variant="primary" type="submit" disabled={data.data.disabled}>{data.data.typeOperacion === "Agregar" ? "Guardar" : "Editar"}</Button>
                            <Button variant="secondary" onClick={() => data.updateData(false, 'modal')} disabled={data.data.disabled}>Close</Button>

                        </Form>
                    </>
                }
            />

        </>
    );
}

export default ProductoPage;