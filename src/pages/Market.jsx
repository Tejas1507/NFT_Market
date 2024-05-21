

import React, {useState} from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Routes } from 'react-router-dom';
import CommonSection from '../components/ui/Common-section/CommonSection';

import  NftCard  from '../components/ui/Nft-card/NftCard';
import  {NFT_DATA}  from '../assests/data/data';

import '../styles/market.css'

const Market = () =>{

    const [ data , setData ] = useState(NFT_DATA); 
    
    const handleCategory = () => {};
    
    const handleItems = () => {};

    //Sorting by value
    const handleSort = (e) => {
        const filterValue = e.target.value;

        if( filterValue === 'high'){
            const filterData = NFT_DATA.filter(item => item.currentBid >= 7 );
            setData(filterData);
        }
        if( filterValue === 'mid'){
            const filterData = NFT_DATA.filter(item => item.currentBid >= 4 && item.currentBid < 7 );
            setData(filterData);
        }
        if( filterValue === 'low'){
            const filterData = NFT_DATA.filter(item => item.currentBid >= 0 && item.currentBid < 4 );
            setData(filterData);
        }

    };


    return (
        <>
        <CommonSection title={'MarketPlace'} />

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5' >
                        <div className='market__product__filter d-flex align-items-center justify-content-between'>
                            <div className='filter__left d-flex align-items-center gap-5'>

                                <div className='all__category__filter'>
                                    <select onChange={handleCategory}>
                                        <option >All Categories</option>
                                        <option value="art">Art</option>
                                        <option value="Music">Music</option>
                                        <option value="virtual-world">Virtual World</option>
                                        <option value="domain-name">Domain Name</option>
                                        <option value="trending-card">Trending cards</option>
                                    </select>
                                </div>
                                <div className='all__items__filter'>
                                    <select onChange={handleItems}>
                                        <option>All Items</option>
                                        <option value="single-item">Single item</option>
                                        <option value="bundle">Bundle</option>
                                    </select>
                                </div>

                            </div>

                            <div className='filter__right'>
                                <select onChange={handleSort}>
                                    <option>Sort By</option>
                                    <option value="high">High Price</option>
                                    <option value="mid">Mid Price</option>
                                    <option value="low">Low Price</option>
                                </select>
                            </div>
                        </div>
                    </Col>
                                              
                    {NFT_DATA.map((item) => (
                        <Col lg='3' md='4' sm='6' className='mb-4' key={item.id} >
                            <NftCard item={item} />
                        </Col>
                    ))};
                        
                </Row>
            </Container>
        </section>
    </>
    )};
export default Market 