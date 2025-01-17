import { ReactNode } from "react";

export interface ValidateNotNumberNegativeProps {
    value: number;
    Onchange: (value: number) => void;
}

export interface ChunkCrudTabletProps {
    firstContentIndex: number;
    lastContentIndex: number;
}

export const DefaultChunkCrudTablet = (ITEMS_PER_PAGE: number) => {
    return {
        firstContentIndex: 0,
        lastContentIndex: ITEMS_PER_PAGE,
    };
};

export interface IGridColumnModelCrudTable {
    headerName: string;
    headerClassName: string;
    children: IfieldCrudTable[];
}
interface IfieldCrudTable {
    field: string;
}

export interface TabletCrudTabletProps {
    data: { [key: string]: any }[];
    NotViewData?: string[];
    chunk: ChunkCrudTabletProps;
    disabled: boolean;
    disabledEdit: boolean;
    hiddenEdit: boolean;
    onClickEdit?: (e: object) => void;
    GridColumnGroupingModel?: IGridColumnModelCrudTable[];
    disabledDelete: boolean;
    hiddenDelete: boolean;
    onClickDelete?: (e: object) => void;
    disabledEye: boolean;
    hiddenEye: boolean;
    onClickEye?: (e: object) => void;
    newAccion1: React.ReactNode;
    onclickAccion1?: (e: any) => void;
    newAccion2: React.ReactNode;
    onclickAccion2?: (e: any) => void;
    newAccion3: React.ReactNode;
    onclickAccion3?: (e: any) => void;
    newAccion4: React.ReactNode;
    onclickAccion4?: (e: any) => void;
    //prettier-ignore
    RenderColumn?: (value: any, column: string, data?: { [key: string]: any }) => ReactNode;
}

export interface OptionDownloadFileProps {
    data: { [key: string]: any }[];
    disabled?: boolean;
    setOpenModal: (arg: boolean) => void;
    nombreArchivoCSV?: string;
    nombreArchivoExcell?: string;
    NotViewData?: string[];
    hiddenExcel?: boolean;
    hiddenCSV?: boolean;
    hiddenDownload?: boolean;
}

export type TYPE_OPTION_DOWNLOAD_FILE = "Excell" | "CSV";

export interface SearchCrudTabletProps {
    disabled?: boolean;
    value: string;
    onchange: (e: string) => void;
}