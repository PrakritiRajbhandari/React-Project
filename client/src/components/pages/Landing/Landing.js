import React, { Component } from "react";
import "./style.css";
import LandingJumbo from "../../LandingJumbo/LandingJumbo";
import BrandDescription from "../../BrandDescription/BrandDescription"
import Product from "../../Product/mens";
import WomensProduct from "../../WomensProduct/Womens";
import ChildrenProduct from "../../ChildrenProduct/Children";
import Footer from "../../Footer/Footer";
class Landing extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="d-flex justify-content-center backgroundImg">
                    <LandingJumbo />
                </div>
                <BrandDescription />
                <Product />
                <WomensProduct />
                <ChildrenProduct />
                <Footer />
            </div>
        );
    }
}

export default Landing;