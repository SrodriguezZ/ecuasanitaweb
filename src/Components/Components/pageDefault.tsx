import { Button, Card, Col, Row } from 'react-bootstrap';
import ModalChangeLoading from './ModalChange';
import Pageheader from '../Layouts/Pageheader/Pageheader';
import { useNavigate } from 'react-router-dom';

interface ChangeLoading {
    tittle: string;
    active: string;
    ChangeLoading?: boolean;
    childrenHeader?: React.ReactNode;
    childrenCardBody: React.ReactNode;
    hiddenRegresar?: boolean;
    tittleButton?: string
    hiddenButton?: boolean
    onclickButtonPrimary?: () => void
    disabled?: boolean
}

const PageDefault: React.FC<ChangeLoading> = ({ ChangeLoading, childrenCardBody, tittle, active, childrenHeader, hiddenRegresar, tittleButton, disabled, hiddenButton, onclickButtonPrimary, }) => {
    const navigate = useNavigate();

    const handleRegresar = () => navigate(-1)

    return (
        <div >
            <ModalChangeLoading open={ChangeLoading != undefined ? ChangeLoading : false} />
            <Pageheader titles={tittle} active={active} />
            <Row className="row-sm">
                <Col lg={12}>
                    <Card>
                        <Card.Header className="d-flex justify-content-between" >
                            <Card.Title as='h3'>{tittle}</Card.Title>
                            <div className="d-flex" >
                                {childrenHeader}
                                {!hiddenRegresar && (
                                    <Button variant='primary' className="btn-block" onClick={() => handleRegresar()} disabled={disabled}>Regresar</Button>
                                )}
                            </div>
                            {(tittleButton || hiddenButton) && (
                                <Col sm={6} md={3} className="">
                                    <Button variant='primary' className="btn-block" disabled={disabled} onClick={() => onclickButtonPrimary && onclickButtonPrimary()} >{tittleButton}  </Button>
                                </Col>
                            )}


                        </Card.Header>
                        <Card.Body>

                            {childrenCardBody}

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default PageDefault;