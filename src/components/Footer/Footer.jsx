

import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css'; 


const My__Account = [
    {
        display: 'Author profile',
        url: '/seller-profile'
    },
    {
        display: 'Create item',
        url: '/create'
    },
    {
        display: 'Collection',
        url: '/market'
    },
    {
        display: 'Edit Profile',
        url: '/edit-profile'
    }
]

const RESOURCES = [
    {
        display: 'Help Center',
        url: '#'
    },
    {
        display: 'Partner',
        url: '#'
    },
    {
        display: 'Community',
        url: '#'
    },
    {
        display: 'Activity',
        url: '#'
    }
]

const COMPANY = [
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Career',
        url: '#'
    },
    {
        display: 'Ranking',
        url: '#'
    },
    {
        display: 'Contact us',
        url: '/contact'
    }
]

const Footer = () => {
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3' md='2' sm='6' className='mb-4'>
                <div className='logo'>
                    <h2 className='d-flex gap-2 align-items-center'>
                        <span>
                            <i class="ri-aliens-line"></i>
                        </span>
                        NFT's
                    </h2>
                    <p>DESCRIPTION</p>
                </div>
                </Col>

                <Col lg='2' md='3' sm='6' className='mb-4'>
                    <h5>My Account</h5>
                    <ListGroup className='list__group'>
                        {
                            My__Account.map((item,index) =>(
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6' className='mb-4'>
                <h5>Resources</h5>
                    <ListGroup className='list__group'>
                        {
                            RESOURCES.map((item,index) =>(
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6' className='mb-4'>
                <h5>Company</h5>
                    <ListGroup className='list__group'>
                        {
                            COMPANY.map((item,index) =>(
                                <ListGroupItem key={index} className='list__item'>
                                    <Link to={item.url}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='2' md='3' sm='6' className='mb-4'>
                    <h5>News Letters</h5>
                    <input type="text" className='newsletter' placeholder='Email'/>
                    <div className="social__links d-flex gap-3 align-items-center">
                        <span><Link to='#'><i class="ri-facebook-box-fill"></i></Link></span>
                        <span><Link to='#'><i class="ri-instagram-fill"></i></Link></span>
                        <span><Link to='#'><i class="ri-twitter-fill"></i></Link></span>
                        <span><Link to='#'><i class="ri-discord-fill"></i></Link></span>
                        <span><Link to='#'><i class="ri-telegram-fill"></i></Link></span>
                    </div>
                </Col>

                <Col lg='12' className='mt-4 text-center'>
                    <p className='copyright'>Copyright 2022, Developed by Tejas @bemechtejas All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;