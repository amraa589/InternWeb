import React from 'react'
import urls from './videoUrl.json'
import { Container,Row,Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Intro = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg="4" md="4" sm="12" className="text-center intro-header">
                    <div className="intro-title mt-5 mb-5">
                        <h3>internship2k21</h3>
                    </div>
                    <div className="intro-desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 mb-5">
               <Col lg="4" md="4" sm="12" className="intro-intro zoom ">
                <div className="card text-center justify-content-center">
                    <div className="text-center mt-3">
                        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
               </Col>
               <Col lg="4" md="4" sm="12" className="intro-intro zoom">
                <div className="card mt-5 text-center">
                    <div className="text-center mt-3">
                        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
               </Col>
               <Col lg="4" md="4" sm="12" className="intro-intro zoom">
               <div className="card text-center">
                    <div className="text-center mt-3">
                        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" className="" alt="..."/>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
               </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="4" md="4" sm="12" className="text-center mb-4">
                    <div className="intro-header">
                        <h3>танилцуулга бичлэг</h3>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
            <Swiper 
            slidesPerView={3}
                spaceBetween={30} 
                pagination={{
            "clickable": true,
            "bulletActiveClass":'swiper-pagination-bullet-active'
            }} className="mySwiper-video">  
            {urls.map((url,i)=>(
                <SwiperSlide key={i} className="intro-video">{url['url']}</SwiperSlide>
            ))}
            </Swiper>
            </Row>
        </Container>
    )
}

export default Intro
