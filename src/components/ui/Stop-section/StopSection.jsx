

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import'./stop-section.css';

const STOP__DATA =[
    {
        title:'Setup your wallet',
        desc:'Description',
        icon:'ri-wallet-2-line'
    },
    {
        title:'Create your collection',
        desc:'Description',
        icon:'ri-layout-masonry-line'
    },
    {
        title:'Add your NFTs',
        desc:'Description',
        icon:'ri-image-line'
    },
    {
        title:'List item for the sale',
        desc:'Description',
        icon:'ri-list-check'
    },
]

const StopSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <h3 className="step__title">Create and sell your NFT's</h3>
                </Col>

                {
                    STOP__DATA.map((item,index) =>
                    <Col lg='3' md='4' sm='6' key={index} className='mb-4' >
                    <div className="single__step__item">
                        <span><i class={item.icon}></i></span>
                        <div className="step__item__content">
                            <h5><Link to='/wallet'>{item.title}</Link></h5>
                            <p className="mb0">{item.desc}</p>
                        </div>
                    </div>
                </Col>)
                }

                
            </Row>
        </Container>
    </section>
};

export default StopSection