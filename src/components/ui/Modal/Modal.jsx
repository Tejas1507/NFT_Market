

import React from "react";
import './modal.css';

const Modal = ( {setShowModal} ) =>{
    return <div className="modal__wrapper" onClick={() => setShowModal(false)}>
        <div className="single__modal">

            <span className="close__modal"><i className="ri-close-line" onClick={() => setShowModal(false)}></i></span>
            <h6 className="text-center text-light">Place a Bid</h6>
            <p className="text-center text-light">You must bid atleast <span className="money">1ETH</span></p>

            <div className="input__item mb-4">
                <input type="number" placeholder="0.00ETH"/>
            </div>

            <div className="input__item mb-3">
                <h6>Enter Quantity, 7 available</h6>
                <input type="number" placeholder="Enter Quantity"/>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>You must bid atleast</p>
                <span className="money">0.00ETH</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>Service Fee</p>
                <span className="money">0.00ETH</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>Total</p>
                <span className="money">0.00ETH</span>
            </div>

            <button className="place__bid-btn">
                Place a Bid
            </button>
        </div>
        
    </div>
}

export default Modal;