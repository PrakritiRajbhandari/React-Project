import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../actions/productQuantity';
import { Link } from "react-router-dom";

import greyTshirt from '../../images/greytshirt.jpg';
import blackTshirt from '../../images/blacktshirt.jpg';
import greyHoddie from '../../images/greyhoddie.jpg';
import blackHoddie from '../../images/blackhoddie.jpg';

function Cart({ basketProps, productQuantity, clearProduct }) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    // const productImages = [greyTshirt, greyHoddie, blackTshirt, blackHoddie];
    const productImages = (product) => {
        if (product.tagName === 'greyTshirt') {
            return greyTshirt;
        } else if (product.tagName === 'greyHoddie') {
            return greyHoddie;
        } else if (product.tagName === 'blackTshirt') {
            return blackTshirt;
        } else if (product.tagName === 'blackHoddie') {
            return blackHoddie;
        }
    }

    productsInCart = productsInCart.map((product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>

                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div>
            <div className="container-products">
                <div className="product-header">
                    <h5 className="product-title">PRODUCT</h5>
                    <h5 className="price sm-hide">PRICE</h5>
                    <h5 className="quantity">QUANTITY</h5>
                    <h5 className="total">TOTAL</h5>
                </div>
                <div className="products">
                    {productsInCart}
                </div>
                <div className="basketTotalContainer">
                    <h4 className="basketTotalTitle">Basket Total</h4>
                    <h4 className="basketTotal">{basketProps.cartCost},00</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <Link to="/">
                        <a class="btn btn-sm active">Continue Shopping</a>
                    </Link>
                </div>
                <div className='col-md-12 text-center my-3'>
                    <Link to="#">
                        <a class="btn btn-sm active">Continue Checkout</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);

