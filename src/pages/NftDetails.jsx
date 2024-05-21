

import React from 'react';

import CommonSection from '../components/ui/Common-section/CommonSection';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {NFT_DATA} from '../assests/data/data';
import LiveAuction  from '../components/ui/LiveAuction';


const NftDetails = () =>{

    const {id} = useParams();

    const singleNft = NFT_DATA.find((item) => item.id === id);
    return (
    <>
        <CommonSection  title = { singleNft.title } />
        
        <section>
            <Container>
                <Row>
                    <Col lg='6' md="6" sm="6">
                        <img src={ singleNft.imgUrl } alt="" className='w-100 single__nft-img' />
                    </Col>
                    <Col lg='6'>
                        <div className='single__nft__content'>
                            <h2>{ singleNft.title }</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
);};

export default NftDetails;