import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { Link } from "react-router-dom";


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className='container-fluid pl-0 m-0'>

                <div className="row">
                    <div className='col-md-12 text-center'>
                        <div className='col-sm-8 mx-auto '>
                            <h1 className='text-center'>My Account</h1>
                        </div>
                        <table className='table col-md-6 mx-auto'>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <Link to="/">
                            <a class="btn btn-sm active">Continue Shopping</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;