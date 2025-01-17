import React, { Component, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import { Link } from 'react-router-dom';

import photos1 from '../../assets/img/photos/1.jpg';
import photos2 from '../../assets/img/photos/2.jpg';
import photos3 from '../../assets/img/photos/3.jpg';
import photos4 from '../../assets/img/photos/4.jpg';
import photos5 from '../../assets/img/photos/5.jpg';
import photos6 from '../../assets/img/photos/6.jpg';
import photos7 from '../../assets/img/photos/7.jpg';
import photos8 from '../../assets/img/photos/8.jpg';
import photos9 from '../../assets/img/photos/9.jpg';
import photos10 from '../../assets/img/photos/10.jpg';
import photos11 from '../../assets/img/photos/11.jpg';
import photos12 from '../../assets/img/photos/12.jpg';


import media1 from '../../assets/img/media/1.jpg';
import media2 from '../../assets/img/media/2.jpg';
import media3 from '../../assets/img/media/3.jpg';
import media4 from '../../assets/img/media/4.jpg';
import media5 from '../../assets/img/media/5.jpg';
import media6 from '../../assets/img/media/6.jpg';
import media7 from '../../assets/img/media/7.jpg';
import media8 from '../../assets/img/media/8.jpg';



//Gallery Component****



export function LightGallery() {
    const [open, setOpen] = useState<any>(false);
    return (
        <div>
            <Row >

                <Col sm={6} lg={4}>
                    <img src={photos1} alt='media1' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos2} alt='media2' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos3} alt='media3' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos4} alt='media4' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos5} alt='media5' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos6} alt='media12' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos7} alt='media4' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos8} alt='media5' onClick={() => setOpen(true)} />
                </Col>

                <Col sm={6} lg={4}>
                    <img src={photos9} alt='media12' onClick={() => setOpen(true)} />
                </Col>

            </Row>
            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }]}
            />
        </div>
    )
}


//FIle-Manager Details Component

export function RecentFiles() {
    const [open, setOpen] = useState<any>(false);
    return (
        <div>
            <Row className="list-unstyled mb-0">

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media1} alt='media1' onClick={() => setOpen(true)} />
                </Col>

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media2} alt='media2' onClick={() => setOpen(true)} />
                </Col>

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media3} alt='media3' onClick={() => setOpen(true)} />
                </Col>

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media4} alt='media4' onClick={() => setOpen(true)} />
                </Col>

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media5} alt='media5' onClick={() => setOpen(true)} />
                </Col>

                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media6} alt='media12' onClick={() => setOpen(true)} />
                </Col>
                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media7} alt='media12' onClick={() => setOpen(true)} />
                </Col>
                <Col className='border-bottom-0 mb-4' xs={6} sm={4} md={4} xl={3}>
                    <img src={media8} alt='media12' onClick={() => setOpen(true)} />
                </Col>



            </Row>
            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src:  media1  }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }]}
            />
        </div>
    )
}


//Blog-Details Page

export function Gallery() {
    const [open, setOpen] = useState<any>(false);
    return (
        <div>
            <Row className="list-unstyled mb-0">

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos1} alt='media1' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos2} alt='media2' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos3} alt='media3' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos4} alt='media4' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos5} alt='media5' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>

                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos6} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos7} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos8} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                    <div className="brick">
                        <Link to='#'>
                            <img src={photos9} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                    </div>
                </Col>



            </Row>
            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }]}
            />
        </div>
    )
}

// Profile Page Light-Gallery


export function PagesGallery() {
    const [open, setOpen] = useState<any>(false);
    return (
        <div>
            <Row className="masonry">

                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className=" js-img-viewer" >
                            <img src={photos1} alt='media1' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos2} alt='media2' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos3} alt='media3' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos4} alt='media4' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos5} alt='media5' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos6} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos7} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos8} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos9} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos10} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos11} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>
                <Col xl={3} lg={4} sm={6}>
                    <div className="brick card overflow-hidden">
                        <Link to="#" className="js-img-viewer">
                            <img src={photos12} alt='media12' onClick={() => setOpen(true)} />
                        </Link>
                        <h4 className="text-center tx-14 mt-3 mb-0">Gallary Image</h4>
                        <div className="ga-border"></div>
                        <p className="text-muted text-center"><small>Photography</small></p>
                    </div>
                </Col>


            </Row>
            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: photos1 }, { src: photos2 }, { src: photos3 }, { src: photos4 }, { src: photos5 }, { src: photos6 }, { src: photos7 }, { src: photos8 }, { src: photos9 }, { src: photos10 }, { src: photos11 }, { src: photos12 }]}
            />
        </div>
    )
}