import { MenuGroup, MenuItem } from "../Components/Layouts/Sidebar/SideBarMenu";

interface IRoutePath {
    name: string;
    path: string;
    element: JSX.Element;
}

//prettier-ignore
export const generateRoutesFromMenu = (menuGroups: MenuGroup[]): IRoutePath[] => {
    const routes: IRoutePath[] = [];

    menuGroups.forEach((group) => {
        if (
            group.permisoPlan === "free" ||
            (typeof group.permisoPlan === 'number')
        ) {
            group.Items.forEach((item) => {
                if (item.type === 'sub' && Array.isArray(item.children)) {
                    item.children.forEach((child) => {
                        if (typeof child.permisoUsuario === 'number' ||
                            child.permisoUsuario === "Perfil" || child.permisoUsuario === "free"
                        ) {
                            if (child.path && child.element) {
                                routes.push({
                                    name: child.title,
                                    path: child.path,
                                    element: child.element as JSX.Element,
                                });
                            }
                        }
                    });
                } else {
                    if (typeof item.permisoUsuario === 'number' || (typeof item.permisoUsuario === 'number') ||
                        item.permisoUsuario === "Perfil" || item.permisoUsuario === "free"
                    ) {
                        if (item.path && item.element) {
                            routes.push({
                                name: item.title,
                                path: item.path,
                                element: item.element as JSX.Element,
                            });
                        }
                    }
                }
            });
        }
    });
    return routes;
};

//prettier-ignore
export const filterMenuGroupsByPermissions = (menuGroups: MenuGroup[]): MenuGroup[] => {
    return menuGroups
        .map((group) => {
            const filteredItems: MenuItem[] = group.Items.filter((item) => {

                return item.hidden
            });

            return {
                ...group,
                Items: filteredItems,
            };
        })
        .filter((group) => group.Items.length > 0);
};