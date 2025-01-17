import React, { Fragment, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../Components/Layouts/Loader/Loader';

import { MENUITEMS } from '../Components/Layouts/Sidebar/SideBarMenu';
import { generateRoutesFromMenu } from '../helper/RouteUtils';

const Error500 = lazy(() => import('../Components/Pages/CustomPages/Error500/Error500'));
const OutletPrivateRoute = lazy(() => import('./outletPrivateRoute'))
const Indexpage = lazy(() => import('../Components/indexpage/Indexpage'));


const PrivateRoute = () => {
    return (
        <Fragment>

            <BrowserRouter>
                <React.Suspense fallback={<Loader />}>
                    <Routes>

                        {/* Components Routes */}

                        <Route path={`${import.meta.env.BASE_URL}`} element={<OutletPrivateRoute />}>
                            <Route index element={<Indexpage />} />

                            {/* Main */}

                            <Route path={`${import.meta.env.BASE_URL}indexpage`} element={<Indexpage />} />

                            {/*Seguridad */}
                            <Route>
                                {generateRoutesFromMenu(MENUITEMS).map((e, index) => {
                                    return (
                                        <Route key={index} path={`${import.meta.env.BASE_URL}${e.path}`} element={e.element} />
                                    )
                                })}
                                <Route path={`${import.meta.env.BASE_URL}*`} element={<Error500 />} />
                            </Route>
                        </Route>

                    </Routes>

                </React.Suspense>
            </BrowserRouter>
        </Fragment>

    );
}

export default PrivateRoute;