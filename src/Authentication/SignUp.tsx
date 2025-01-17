import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import favicon from '../assets/img/brand/favicon.png';
import faviconWhite from '../assets/img/brand/favicon-white.png';
import SignupImg from '../assets/img/pngs/8.png';
import { RegisterPostApi, useRegister } from '../api/Controller/seguridad/registerController';

export default function SignUp() {
    const [err, setError] = useState<string>("");
    const [Loader, setLoader] = useState<boolean>(false);
    const [data, setData] = React.useState<RegisterPostApi>({
        nombre: '',
        email: '',
        telefono: '',
        password: '',
    })
    const { email, password, nombre } = data;
    const { setRegister } = useRegister()
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const Signup = async (e: React.FormEvent) => {
        //   console.log(data)
        e.preventDefault();
        setLoader(true)
        try {
            await setRegister(data)
            navigate(`${import.meta.env.BASE_URL}`);
        } catch (e: any) {
            setError(e.response.data.message || 'Error al Registrar usuario. Verifique sus credenciales.');
        } finally {
            setLoader(false)
        }
    }

    // let navigate = useNavigate();

    // const RouteChange = () => {
    //     let path = `${import.meta.env.BASE_URL}indexpage`;
    //     navigate(path);
    // }

    return (
        <div>
            <div className="main-container container-fluid">
                <Row className="no-gutter">

                    <Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
                        <Row className="wd-100p mx-auto text-center">
                            <Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
                                <img src={SignupImg} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} lg={6} xl={5} className="bg-white py-4">
                        <div className="login d-flex align-items-center py-2">

                            <Container className="p-0">
                                <Row className="">
                                    <Col md={10} lg={10} xl={9} className="mx-auto">
                                        <div className="card-sigin">
                                            <div className="mb-5 d-flex">
                                                <Link to="#"><img src={favicon} className="sign-favicon-a ht-40" alt="logo" />
                                                    <img src={faviconWhite} className="sign-favicon-b ht-40" alt="logo" />
                                                </Link>
                                                <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
                                            </div>
                                            <div className="main-signup-header">
                                                <h2 className="text-primary">Comenzar</h2>
                                                <h5 className="fw-normal mb-4">La inscripción es gratuita y solo toma un minuto.</h5>
                                                {err && <Alert variant="danger">{err}</Alert>}
                                                <Form action="#" onSubmit={Signup} >
                                                    <Form.Group>
                                                        <Form.Label className="mb-2">Nombre De Usuario</Form.Label>
                                                        <Form.Control className="mb-3" placeholder="Ingrese nombre de usuario" name="nombre" type="text" value={nombre} onChange={changeHandler} required />{" "}
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label className="mb-2">Correo</Form.Label>
                                                        <Form.Control className="mb-3" placeholder="Ingrese Correo" type="email" name="email" value={email} onChange={changeHandler} required />{" "}
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label className="mb-2">Contraseña</Form.Label>
                                                        <Form.Control className="mb-3" placeholder="Ingrese Contraseña" name="password" type="password" value={password} onChange={changeHandler} required />{" "}
                                                    </Form.Group>
                                                    <Button className="btn-main-primary btn-block" type='submit' >
                                                        Crear Cuenta {Loader ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
                                                    </Button>

                                                </Form>
                                                <div className="main-signup-footer mt-5">
                                                    <p>¿Ya tienes una cuenta? <Link to={`${import.meta.env.BASE_URL}Authentication/SignIn`}> Iniciar Sesión</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}