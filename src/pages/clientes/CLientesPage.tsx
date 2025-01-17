import { useCallback, useEffect } from "react";
import { UseCLientesController } from "../../api/Controller/clientes/ClientesController";
import { useFillData } from "../../Hooks/useFilldata";
import { dataDefaultClientesPage, IdataDefaultClientesPage, IOperacionClientes } from "../../api/Controller/clientes/InterfaceClientes";
import CrudTablet from "../../Components/Components/crudTablet/CrudTablet";
import { ModalPrincipal } from "../../Components/Components/ModalPrincipal";
import Input from "../../Components/Components/Input";
import { Button, Form } from "react-bootstrap";
import { alertglobal } from "../../Components/Components/sweertAlert/sweertAlert";

const CientesPage = () => {
    const clientes = UseCLientesController()
    const data = useFillData<IdataDefaultClientesPage>(dataDefaultClientesPage)

    const ListarClientes = useCallback(async () => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await clientes.Listar()
            data.updateData(response, 'data')
        } catch (e: any) {
            alertglobal('info', e.message, 'info')
        } finally {
            data.updateData(false, 'loading')
            data.updateData(false, 'disabled')
        }
    }, [data.data.reiniciarData])

    useEffect(() => {
        ListarClientes()
    }, [ListarClientes])

    const handleAdd = async () => {
        const NewData: IOperacionClientes = {
            id: 0,
            nombre: "",
            email: "",
            telefono: "",
            password: "",
        }
        data.updateData('Agregar', 'typeOperacion')
        data.updateData(NewData, 'Operacion')
        data.updateData(true, 'modal')
    }

    const handleEdit = (id: number) => {
        const ObjectSelect = data.data.data.find((e) => e.id === id)
        const NewData: IOperacionClientes = {
            id: ObjectSelect?.id || 0,
            nombre: ObjectSelect?.nombre || '',
            email: ObjectSelect?.email || '',
            telefono: ObjectSelect?.password || '',
            password: ObjectSelect?.password || '',
        }
        data.updateData('Editar', 'typeOperacion')
        data.updateData(NewData, 'Operacion')
        data.updateData(true, 'modal')
    }

    const HandleDelete = async (id: number) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await clientes.Eliminar(id)
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

    const RenderChangeOperacion = (value: string, field: keyof IOperacionClientes) => {
        const RenderData = data.data.Operacion
        RenderData[field] = value as never
        data.updateData(RenderData, 'Operacion')
    }

    const onclickOperacion = () => {
        if (data.data.typeOperacion === "Agregar") {
            renderAdd(data.data.Operacion)
        }
        if (data.data.typeOperacion === 'Editar') {
            renderEdit(data.data.Operacion)
        }
    }

    const renderAdd = async (Send: IOperacionClientes) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await clientes.guardar(Send)
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

    const renderEdit = async (Send: IOperacionClientes) => {
        data.updateData(true, 'loading')
        data.updateData(true, 'disabled')
        try {
            const response = await clientes.Editar(Send)
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

    return (

        <>
            <CrudTablet
                tittle={""}
                active={""}
                ChangeLoading={data.data.loading}
                tittleButton='Agregar Cliente'
                hiddenButton
                onclickButtonPrimary={() => handleAdd()}
                data={data.data.data.map((e) => {
                    return {
                        'id': e.id || 0,
                        'Nombre': e.nombre || '',
                        'Email': e.email || '',
                        'Telefono': e.telefono || '',
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
                                label="Email"
                                placeholder="Email"
                                type="email"
                                value={data.data.Operacion.email || ''}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value, 'email')}
                                required
                            />

                            <Input
                                className="mb-4"
                                label="Telefono"
                                placeholder="Telefono"
                                value={data.data.Operacion.telefono || ''}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value, 'telefono')}
                                required
                            />

                            <Input
                                className="mb-4"
                                label="Contraseña"
                                placeholder="Contraseña"
                                value={data.data.Operacion.password || ''}
                                onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => RenderChangeOperacion(value, 'password')}
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

export default CientesPage;