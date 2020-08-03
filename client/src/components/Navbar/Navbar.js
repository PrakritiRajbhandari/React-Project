
import "./style.css";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';
import { Link } from 'react-router-dom';


function Navbar(props) {

    function logOut(e) {
        console.log("button clicked");
        e.preventDefault();
        localStorage.removeItem('usertoken');
        window.location.reload();
    }

    console.log(props);
    useEffect(() => {
        getNumbers();
    }, []);
    const loginRegLink = (
        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart" /><span>{props.basketProps.basketNumbers}</span>
                </Link>
            </li>
            <li>
                <Link className='btn btn-sm active mr-1 mb-1' to='/login'>
                    Login
                    </Link>
            </li>
            <li>
                <Link className='btn btn-sm active' to='/register'>
                    Register
                    </Link>
            </li>
        </ul>
    )
    const userLink = (

        <ul className='navbar-nav list-group list-group-horizontal'>
            <li>
                <Link className='navText mr-1 mb-1' to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link className=' navText mr-1 mb-1' to='/profile'>
                    My Account
                    </Link>
            </li>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart" /><span>{props.basketProps.basketNumbers}</span>
                </Link>
            </li>
            <li>
                {/* <a href="/" rel='noopener noreferrer' onClick={this.logOut.bind(this)}>
                        Logout
                    </a> */}
                <button className="btn btn-sm active" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={(e) => {
                    // console.log("button clicked");
                    // e.preventDefault();
                    //localStorage.removeItem('usertoken');
                    // this.props.history.push('/');
                    //window.location.reload();
                    logOut(e);
                }}>
                    <div>Logout</div>
                </button>
            </li>
        </ul >
    )
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='collapse navbar-collapse d-flex justify-content-end' id='navbar1'>
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        </nav>
    )
}


const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);