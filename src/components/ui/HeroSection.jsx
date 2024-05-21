

import React from "react";
import { Container, Row, Col } from "reactstrap";
import{ Link } from 'react-router-dom';
import "./hero-section.css";
import alienImg from '../../assests/nftimg/alien.jpg';


const HeroSection = () =>{
    return <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>Disocver rare digital art and collect <span>sell extra ordinary</span> Nft's</h2>
                        <p>Description</p>
                        <div className="hero__btns d-flex alig-items-center gap-4">
                            <button className="explore__btn d-flex alig-items-center gap-2">
                                <i class="ri-space-ship-line"></i>
                                <Link to='/market'>Explore</Link>
                            </button>
                            <button className="create__btn d-flex alig-items-center gap-2">
                                <i class="ri-brush-line"></i>
                                <Link to='/create'>Create</Link>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={alienImg} alt="alien_on_a_chair" className="w-75"/>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
}
 
export default HeroSection;