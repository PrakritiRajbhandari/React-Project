import React, { useState } from 'react';
import greyTshirt from '../../images/greytshirt.jpg';
import blackTshirt from '../../images/blacktshirt.jpg';
import greyHoddie from '../../images/greyhoddie.jpg';
import blackHoddie from '../../images/blackhoddie.jpg';
import nike from '../../images/nike.jpg';
import Pinkhoodies from '../../images/Pinkhoodies.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';

const BrandDescription = (props) => {
    console.log(props);
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading">
                            <h1>BenJO</h1>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3 ">
                        <div className="heading2 text-center">
                            <h3>Welcome to BenJO. We provide you an amazing online shopping experience. We have range of products for all kinds of people from Kids to Adults. </h3>
                            <span>HAPPY SHOPPING !!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="image">
                    <img src={greyTshirt} alt="Grey Tshirt" />
                    <h3>Grey Tshirt</h3>
                    <h3>$12.00</h3>
                    <a onClick={() => props.addBasket('greyTshirt')} className="addToCart cart1" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <img src={blackTshirt} alt="Black Tshirt" />
                    <h3>Black Tshirt</h3>
                    <h3>$14.00</h3>
                    <a onClick={() => props.addBasket('blackTshirt')} className="addToCart cart2" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <img src={greyHoddie} alt="Grey Hoddie" />
                    <h3>Grey Hoddie</h3>
                    <h3>$35.00</h3>
                    <a onClick={() => props.addBasket('greyHoddie')} className="addToCart cart3" href="#">Add to Cart</a>
                </div>

                <div className="image">
                    <img src={blackHoddie} alt="Black Hoddie" />
                    <h3>Black Hoddie</h3>
                    <h3>$35.00</h3>
                    <a onClick={() => props.addBasket('blackHoddie')} className="addToCart cart4" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <img src={nike} alt="nike" />
                    <h3>Black Nike Hoddie</h3>
                    <h3>$100.00</h3>
                    <a onClick={() => props.addBasket('nike')} className="addToCart cart5" href="#">Add to Cart</a>
                </div>
                <div className="image">
                    <img src={Pinkhoodies} alt="Pinkhoodies" />
                    <h3>Pink Nike Hoddie</h3>
                    <h3>$50.00</h3>
                    <a onClick={() => props.addBasket('Pinkhoodies')} className="addToCart cart5" href="#">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(BrandDescription);