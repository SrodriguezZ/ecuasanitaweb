import { useCallback, useEffect } from "react"
import { dataDefaultFacturaPage, IdataDefaultFacturaPage, IDetalleFactura, IOperacionFactura, IPostFactura } from "../../api/Controller/facturas/Interfacefacturas"
import { useFillData } from "../../Hooks/useFilldata"
import { alertglobal } from "../../Components/Components/sweertAlert/sweertAlert"
import { UseProductoController } from "../../api/Controller/producto/prodcutorContoller"
import { UseFacturaController } from "../../api/Controller/facturas/facturasController"
import { ModalPrincipal } from "../../Components/Components/ModalPrincipal"
import Input from "../../Components/Components/Input"
import { Button, Col, Form, } from "react-bootstrap"
import CrudTablet from "../../Components/Components/crudTablet/CrudTablet"
import { fechaEnEspañol } from "../../helper/FechasFunction"
import { SelectPrincipal } from "../../Components/Components/SelectPrincipal"
import { UseCLientesController } from "../../api/Controller/clientes/ClientesController"

const FacturaPage = () => {
    const Producto = UseProductoController()
    const Factura = UseFacturaController()
    const Cliente = UseCLientesController()
    const data = useFillData<IdataDefaultFacturaPage>(dataDefaultFacturaPage)

    const ListarFactura = useCallback(async () => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Factura.Listar()
            data.updateData(response, 'data')
            const responseProduc = await Producto.Listar()
            data.updateData(responseProduc, 'productos')
            const CleinbteReponse = await Cliente.Listar()
            data.updateData(CleinbteReponse, 'cliente')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }, [data.data.reiniciarData])

    useEffect(() => {
        ListarFactura()
    }, [ListarFactura])

    const handleAdd = async () => {
        const NewData: IOperacionFactura = {
            id: 0,
            numeroFactura: "",
            fecha: null,
            cliente_id: 0,
            facturaDetalles: []
        }
        data.updateData('Agregar', 'typeOperacion')
        data.updateData(NewData, 'Operacion')
        data.updateData(true, 'modal')
    }

    const RenderChangeOperacion = (value: string | null | Date | number, field: keyof IOperacionFactura) => {
        const RenderData = data.data.Operacion
        if (RenderData) {
            RenderData[field] = value as never
            data.updateData(RenderData, 'Operacion')
        }
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

        const NewData: IPostFactura = {
            fecha: data.data.Operacion.fecha || new Date(),
            id: data.data.Operacion.id,
            numeroFactura: data.data.Operacion.numeroFactura,
            cliente_id: data.data.Operacion.cliente_id,
            facturaDetalles: data.data.Operacion.facturaDetalles.map((e) => {
                return {
                    id: e.id,
                    factura_id: e.factura_id,
                    idProducto: e.idProducto,
                    cantidad: e.cantidad
                }
            })
        }
        if (data.data.typeOperacion === "Agregar") {
            renderAdd(NewData)
        }

    }

    const renderAdd = async (Send: IPostFactura) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await Factura.guardar(Send)
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

    const AddDetalle = () => {
        const NumberMax = data.data.Operacion.facturaDetalles.length > 0
            ? Math.max(...data.data.Operacion.facturaDetalles.map(detalle => Number(detalle.id)))
            : 0;


        const NewDetalle: IDetalleFactura = {
            id: NumberMax + 1,
            factura_id: 0,
            idProducto: 0,
            cantidad: 0
        }

        const Detalles = data.data.Operacion.facturaDetalles
        const NewOperacion: IOperacionFactura = {
            id: data.data.Operacion.id,
            numeroFactura: data.data.Operacion.numeroFactura,
            fecha: data.data.Operacion.fecha,
            cliente_id: data.data.Operacion.cliente_id,
            facturaDetalles: [...Detalles, NewDetalle]
        }
        data.updateData(NewOperacion, 'Operacion')
    }

    const RenderChangeDetalle = (value: number | string, field: keyof IDetalleFactura, id: number) => {
        const ObjectSelect = data.data.Operacion.facturaDetalles.find(X => X.id === id)
        const Filter = data.data.Operacion.facturaDetalles.filter(X => X.id !== id)
        const RenderData = ObjectSelect
        if (RenderData) {
            RenderData[field] = value as never
            const NewOperacion: IOperacionFactura = {
                id: data.data.Operacion.id,
                numeroFactura: data.data.Operacion.numeroFactura,
                fecha: data.data.Operacion.fecha,
                cliente_id: data.data.Operacion.cliente_id,
                facturaDetalles: [...Filter, ObjectSelect]
            }
            console.log(NewOperacion)
            data.updateData(NewOperacion, 'Operacion')
        }
    }

    return (

        <>
            <CrudTablet
                tittle={"Facturas"}
                active={""}
                ChangeLoading={data.data.loading}
                tittleButton='Agregar Factura'
                hiddenButton
                onclickButtonPrimary={() => handleAdd()}
                data={data.data.data.map((e) => {
                    return {
                        'id': e.id || 0,
                        'Numero Factura': e.numeroFactura || '',
                        'Fecha': fechaEnEspañol(e.fecha) || ''
                    }
                })}
                NotViewData={["id"]}

            />

            <ModalPrincipal
                open={data.data.modal}
                setOpen={(e) => data.updateData(e, 'modal')}
                width={1000}
                children={
                    <>
                        <Form className="form-horizontal" noValidate validated={data.data.validate} onSubmit={handleSubmit}>

                            <Col lg={6}>
                                <SelectPrincipal
                                    label="Cliente"
                                    options={data.data.cliente.map(E => { return { value: E.id, label: E.nombre } })}
                                    selectedRole={data.data.Operacion.cliente_id}
                                    onChange={(value: number) => RenderChangeOperacion(value, 'cliente_id')}
                                    required
                                    errorMessage={data.data.Operacion.cliente_id === 0 ? "Se debe de Escoger Un Cliente" : ''}
                                />
                            </Col>

                            <Input
                                className="mb-4"
                                label="Numero Factura"
                                placeholder="Numero Factura"
                                value={data.data.Operacion.numeroFactura || ''}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value, 'numeroFactura')}
                                required
                            />
                            <Input
                                type='date'
                                label='Fecha'
                                value={data.data.Operacion.fecha != null ? new Date(data.data.Operacion.fecha).toISOString().split('T')[0] : ''}

                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value != '' ? new Date(value) : null, 'fecha')}
                                required
                            />



                            <Button className="me-2" onClick={() => AddDetalle()} disabled={data.data.disabled}>Agregar Detalle</Button>
                            {data.data.Operacion.facturaDetalles.map((e) => {
                                return (
                                    <>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}  >
                                            <Col lg={6}>
                                                <SelectPrincipal
                                                    label="Producto"
                                                    options={data.data.productos.map(E => { return { value: E.id, label: E.nombre } })}
                                                    selectedRole={e.idProducto}
                                                    onChange={(value: number) => RenderChangeDetalle(value, 'idProducto', e.id)}
                                                    required
                                                    errorMessage={e.idProducto === 0 ? "Se debe de Escoger Un producto" : ''}
                                                />
                                            </Col>
                                            <Col lg={6}>
                                                <Input
                                                    label='Cantidad'
                                                    type="number"
                                                    value={e.cantidad}
                                                    onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeDetalle(value, 'cantidad', e.id)}
                                                    required
                                                />
                                            </Col>


                                        </div>
                                    </>
                                )
                            })}


                            <Button className="me-2" variant="primary" type="submit" disabled={data.data.disabled}>{data.data.typeOperacion === "Agregar" ? "Guardar" : "Editar"}</Button>
                            <Button variant="secondary" onClick={() => data.updateData(false, 'modal')} disabled={data.data.disabled}>Close</Button>

                        </Form>
                    </>
                }
            />
        </>
    );
}

export default FacturaPage;