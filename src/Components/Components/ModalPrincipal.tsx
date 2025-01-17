import { Link } from "react-router-dom";
import Rodal from "rodal";

interface IModalPrincipal {
    open: boolean
    setOpen?: (e: boolean) => void
    tittle?: string
    subtittle?: string
    children: JSX.Element;
    height?: number
    width?: number
}

//prettier-ignore
export const ModalPrincipal: React.FC<IModalPrincipal> = ({ open, setOpen, tittle, subtittle, children, height = 280, width }) => {
    return (
        <>
            <Rodal onClose={() => setOpen ? setOpen(false) : null} visible={open} animation='door' height={height} width={width}>
                <div className='modal-header'>{tittle ? tittle.toUpperCase() : ''}
                    <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => setOpen ? setOpen(false) : null}><i className='fe fe-x ms-auto'></i></span></Link>
                </div>
                <div className='modal-body'>
                    {subtittle ? <h6>{subtittle}</h6> : <></>}
                    {children}
                </div>
            </Rodal>
        </>
    );
}