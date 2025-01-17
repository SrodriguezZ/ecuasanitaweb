import React, { Fragment, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../Components/Layouts/Loader/Loader';

const Auth = lazy(() => import('../Authentication/Auth'));
const SignIn = lazy(() => import('../Authentication/SignIn'));
const SignUp = lazy(() => import('../Authentication/SignUp'));

const LoginRoute = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <React.Suspense fallback={<Loader />}>

                    <Routes>

                        <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
                            <Route index element={<SignIn />} />
                            <Route path={`${import.meta.env.BASE_URL}Authentication/SignIn`} element={<SignIn />} />
                            <Route path={`${import.meta.env.BASE_URL}Authentication/SignUp`} element={<SignUp />} />
                        </Route>

                    </Routes>

                </React.Suspense>
            </BrowserRouter>
        </Fragment>

    );
}

export default LoginRoute;