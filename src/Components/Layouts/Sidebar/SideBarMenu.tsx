import { lazy } from "react";
import ProductoPage from "../../../pages/productos/productosPage";

const FacturaPage = lazy(() => import("../../../pages/Facturas/facturaPage"));
const Indexpage = lazy(() => import("../../indexpage/Indexpage"));
const CientesPage = lazy(() => import("../../../pages/clientes/CLientesPage"));

export type TypePlanPermiso = "free"
export type TyperPermiUser = "Perfil" | "free"

export interface MenuItem {
    title: string;
    icon?: JSX.Element;
    type: 'link' | 'sub';
    active: boolean;
    path?: string;
    selected?: boolean;
    badge?: string;
    badgetxt?: string;
    children?: MenuItem[];
    permisoUsuario?: number | TyperPermiUser
    hidden?: boolean
    element?: React.ReactNode
}

export interface MenuGroup {
    menutitle: string;
    Items: MenuItem[];
    permisoPlan: number | TypePlanPermiso
}

export type Menu = MenuGroup[];

export const MENUITEMS: Menu = [
    {
        menutitle: "MAIN",
        permisoPlan: 'free',
        Items: [
            {
                title: 'Index',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>),
                type: 'link',
                active: false,
                path: `${import.meta.env.BASE_URL}indexpage`,
                selected: false,
                badge: "badge bg-success text-light ",
                badgetxt: "1",
                element: <Indexpage />,
                permisoUsuario: "free",
                hidden: true,

            },

        ]
    },

    {
        menutitle: "Clientes",
        permisoPlan: 0,
        Items: [

            {
                title: 'Clientes',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>),
                type: 'link',
                active: false,
                path: `${import.meta.env.BASE_URL}clientes/`,
                selected: false,
                badge: "badge bg-success text-light ",
                badgetxt: "1",
                element: <CientesPage />,
                permisoUsuario: 0,
                hidden: true
            },

            {
                title: 'Productos',
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>),
                type: 'link',
                active: false,
                path: `${import.meta.env.BASE_URL}clientes/producto`,
                selected: false,
                badge: "badge bg-success text-light ",
                badgetxt: "1",
                element: <ProductoPage />,
                permisoUsuario: 0,
                hidden: true
            },



        ],


    },

    {
        menutitle: "Facturas",
        permisoPlan: 0,
        Items: [
            {
                title: "Facturas",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" /><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" /></svg>),
                type: 'link',
                active: false,
                path: `${import.meta.env.BASE_URL}Facturas`,
                selected: false,
                badge: "badge bg-success text-light ",
                badgetxt: "1",
                permisoUsuario: 6164,
                element: <FacturaPage />,
                hidden: true
            },

        ],
    },



]