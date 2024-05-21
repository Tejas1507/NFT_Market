

import React from 'react';
import { Container } from 'reactstrap';

import HeroSection from '../components/ui/HeroSection';
import LiveAuction from '../components/ui/LiveAuction';
import SellerSection from '../components/ui/Seller-section/SellerSection';
import Trending from '../components/ui/Trending-section/Trending';
import StopSection from "../components/ui/Stop-section/StopSection";

const Home = () =>{
    return(
    <>
    <HeroSection/> 
    <LiveAuction/>
    <SellerSection/>
    <Trending/>
    <StopSection/>
    </>
    );  
};

export default Home;