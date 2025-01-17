import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import favicon from '../assets/img/users/images.jpg';
import faviconWhite from '../assets/img/users/images.jpg';
import login from '../assets/img/users/images.jpg';
import { useFillData } from '../Hooks/useFilldata'
import { useRef } from 'react';
import { useAuth } from '../api/Controller/seguridad/authController';
import { ILogin, LoginDataDefualt } from '../api/Controller/seguridad/interfaceAuthController';

export default function SignIn() {
    const { data, updateData } = useFillData<ILogin>(LoginDataDefualt);
    const auth = useAuth();
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const HandleLogin = async (e: React.FormEvent) => {
        updateData(true, 'validate')
        e.preventDefault();
        e.stopPropagation();
        updateData(true, 'loading');
        updateData(true, 'disabled');
        try {
            await auth.setLogin({ email: data.email, password: data.password });
            updateData('', 'err');
            window.location.reload();
            navigate("Authentication/SignUp");
        } catch (err: any) {
            updateData(err.response.data.message || 'Error al iniciar sesión. Verifique sus credenciales.', 'err');
        } finally {
            updateData(false, 'loading');
            updateData(false, 'disabled');
        }
    };

    return (
        <>
            <div>
                <div className="main-container container-fluid">
                    <Row className="no-gutter">
                        <Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
                            <Row className="wd-100p mx-auto text-center">
                                <Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
                                    <img src={login} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
                                </Col>
                            </Row>
                        </Col>

                        <Col md={6} lg={6} xl={5} className="bg-white py-4">
                            <div className="login d-flex align-items-center py-2">
                                <Container className="p-0">
                                    <Row>
                                        <Col md={10} lg={10} xl={9} className="mx-auto">
                                            <div className="card-sigin">
                                                <div className="mb-5 d-flex">
                                                    <Link to="#"><img src={favicon} className="sign-favicon-a ht-40" alt="logo" />
                                                        <img src={faviconWhite} className="sign-favicon-b ht-40" alt="logo" />
                                                    </Link>
                                                    <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1>
                                                </div>
                                                <div className="card-sigin">
                                                    <div className="main-signup-header">
                                                        <h2>Bienvenido!</h2>
                                                        <h5 className="fw-semibold mb-4">Por favor inicie sesión para continuar.</h5>
                                                        {data.err && <Alert variant="danger">{data.err}</Alert>}
                                                        <Form className="form-horizontal" noValidate onSubmit={HandleLogin} validated={data.validate} >
                                                            <Form.Group>
                                                                <Form.Label className="mb-2">Correo</Form.Label>
                                                                <Form.Control
                                                                    id="email"
                                                                    className="mb-3"
                                                                    name="email"
                                                                    placeholder="Ingrese Correo"
                                                                    type="email"
                                                                    ref={emailRef}
                                                                    value={data.email}
                                                                    disabled={data.disabled}
                                                                    onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => updateData(value.trim(), 'email')}
                                                                    required
                                                                />
                                                            </Form.Group>
                                                            <Form.Group>
                                                                <Form.Label className="mb-2">Contraseña</Form.Label>
                                                                <Form.Control
                                                                    className="mb-3"
                                                                    name="password"
                                                                    placeholder="Ingrese Contraseña"
                                                                    type="password"
                                                                    ref={passwordRef}
                                                                    value={data.password}
                                                                    disabled={data.disabled}
                                                                    onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => updateData(value.trim(), 'password')}
                                                                    required
                                                                />
                                                            </Form.Group>
                                                            <Button className="btn-main-primary btn-block" type="submit" disabled={data.disabled}>
                                                                Iniciar Sesion{data.loading && <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span>}
                                                            </Button>
                                                        </Form>
                                                        <div className="main-signin-footer mt-5">
                                                            <p>No tiene cuenta? <Link to={`${import.meta.env.BASE_URL}Authentication/SignUp`}>Crear Una Cuenta</Link></p>
                                                        </div>
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

        </>
    )

}