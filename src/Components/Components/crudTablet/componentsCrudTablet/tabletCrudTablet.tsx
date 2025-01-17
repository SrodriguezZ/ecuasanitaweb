import { ReactNode, useEffect, useState } from "react";
import { sortArrayByKey } from "./filterCrudTablet";
import { IGridColumnModelCrudTable, TabletCrudTabletProps } from "../interfaceCrudtablet";
import { Col, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { fechaEnEspañol } from "../../../../helper/FechasFunction";
import { AlertGlobalOptions } from "../../sweertAlert/sweertAlert";

//prettier-ignore 
const TabletCrudTablet = ({ data, GridColumnGroupingModel, NotViewData, chunk, disabled, disabledEdit, hiddenEdit, onClickEdit, disabledDelete, hiddenDelete, onClickDelete, disabledEye, hiddenEye, onClickEye, newAccion1, newAccion2, newAccion3, newAccion4, onclickAccion1, onclickAccion2, onclickAccion3, onclickAccion4 }: TabletCrudTabletProps) => {
    const [Header, setHeader] = useState<string[]>([]);
    const [dataSort, setDataSort] = useState<{ [key: string]: any }[]>([]);

    useEffect(() => {
        setHeader(data[0] ? (NotViewData ? Object.keys(data[0]).filter((key) => !NotViewData.includes(key)) : Object.keys(data[0])) : ['']);
        setDataSort(data);
    }, [data, NotViewData]);

    const handleSort = (e: string) => {
        const sortedData = sortArrayByKey([...dataSort], e);
        setDataSort(sortedData);
    }

    const HandleDelete = async (Body) => {
        if (await AlertGlobalOptions("¿Estas seguro de eliminar este registro?", "Si", "No", "warning")) {
            onClickDelete ? onClickDelete(Body) : null
        }
    }

    const OnchangeGroupColumn = (header: string[], grid?: IGridColumnModelCrudTable[]): ReactNode => {
        const displayedHeaders = new Set<string>();
        const response = header.map((e) => {
            const gridColumn = grid && grid.find((g) =>
                g.children.some((child) => child.field === e)
            );
            if (gridColumn) {
                const uniqueKey = `${gridColumn.headerName}-${gridColumn.children[0].field}`;
                if (!displayedHeaders.has(uniqueKey)) {
                    displayedHeaders.add(uniqueKey);
                    return (
                        <th key={uniqueKey} colSpan={gridColumn.children.length} className={`${gridColumn.headerClassName}`}>
                            <span>
                                {gridColumn.headerName}
                            </span>
                        </th>
                    );
                }
            } else {
                return (
                    <th key={e} >
                        <span>
                            {""}
                        </span>
                    </th>
                );
            }
            return null;
        });
        return response.filter((element) => element !== null);
    };

    return (dataSort.length > 0 &&
        <>
            <div className="e-table pb-2">
                <div className="d-flex">
                    <Table className="border-top-0  table-bordered text-nowrap border-bottom" >
                        <thead>
                            <tr>
                                {GridColumnGroupingModel && OnchangeGroupColumn(Header, GridColumnGroupingModel)}
                            </tr>
                            <tr>
                                {Header.length > 0 && Header.map((el) => (
                                    <th
                                        key={el}
                                        className="wd-15p border-bottom-0"
                                    >
                                        <span className="tabletitle h6" >
                                            {el.toUpperCase()}
                                        </span>
                                        <button onClick={() => handleSort(el)}>
                                            <span className="h6" >
                                                <i className="fa fa-sort text-primary"></i>
                                            </span>
                                        </button>
                                    </th>
                                ))}
                                {(hiddenEye || hiddenEdit || newAccion1 || newAccion2 || newAccion3 || newAccion4 || hiddenDelete) && (
                                    <th className="wd-15p border-bottom-0"  >
                                        <span className="tabletitle" >
                                            Acciones
                                        </span>
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {dataSort && dataSort.slice(chunk.firstContentIndex, chunk.lastContentIndex).map((Body, rowIndex) => {
                                const classes = "";
                                return (
                                    <tr key={rowIndex} className="text-center" >
                                        {Header.length > 0 && Header.map((el, colIndex) => {

                                            return (
                                                <td className={classes} key={colIndex}>

                                                    <span className="font-normal text-sm">
                                                        {Body ? Body[el] instanceof Date ? fechaEnEspañol(Body[el]) : Body[el] : ''}
                                                    </span>

                                                </td>
                                            );
                                        })}
                                        {(hiddenEye || hiddenEdit || newAccion1 || newAccion2 || newAccion3 || newAccion4 || hiddenDelete) && (
                                            <td className="d-flex justify-content-start">
                                                {newAccion1 && (
                                                    <button onClick={() => onclickAccion1 ? onclickAccion1(Body) : null}  >
                                                        {newAccion1}
                                                    </button>
                                                )}


                                                {hiddenEye && (
                                                    <>
                                                        <Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Ver</Tooltip>}>
                                                                <button
                                                                    className="ml-1"
                                                                    disabled={disabled || disabledEye}
                                                                    onClick={() => onClickEye ? onClickEye(Body) : null}
                                                                >
                                                                    <i className="fa fa-eye text-success"></i>
                                                                </button>
                                                            </OverlayTrigger>
                                                        </Col>
                                                    </>
                                                )}
                                                {newAccion3 && (
                                                    <button onClick={() => onclickAccion3 ? onclickAccion3(Body) : null}  >
                                                        {newAccion3}
                                                    </button>
                                                )}

                                                {hiddenEdit && (
                                                    <>
                                                        <Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Editar</Tooltip>}>
                                                                <button
                                                                    className="ml-1"
                                                                    disabled={disabled || disabledEdit}
                                                                    onClick={() => onClickEdit ? onClickEdit(Body) : null}
                                                                >

                                                                    <i className="fa fa-external-link-alt text-info "></i>
                                                                </button>
                                                            </OverlayTrigger>
                                                        </Col>
                                                    </>
                                                )}

                                                {newAccion2 && (
                                                    <button onClick={() => onclickAccion2 ? onclickAccion2(Body) : null}  >
                                                        {newAccion2}
                                                    </button>
                                                )}

                                                {hiddenDelete && (
                                                    <>

                                                        <Col sm={6} xl={3} className="mg-t-30 mg-xl-t-0">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'> Eliminar</Tooltip>}>
                                                                <button
                                                                    className="ml-1"
                                                                    disabled={disabled || disabledDelete}
                                                                    onClick={() => HandleDelete(Body)}
                                                                >

                                                                    <i className="fa fa-trash text-danger"></i>
                                                                </button>
                                                            </OverlayTrigger>
                                                        </Col>

                                                    </>
                                                )}
                                                {newAccion4 && (
                                                    <button onClick={() => onclickAccion4 ? onclickAccion4(Body) : null}  >
                                                        {newAccion4}
                                                    </button>
                                                )}
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default TabletCrudTablet;