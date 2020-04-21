import React, { Component } from 'react';
import '../App.css';
//import PropTypes from -'prop-types';

class Contact extends Component {
    render() {
        //we can destructure the prop if we don't want to use this.props everytime
        const { address } = this.props;
        return (
            <div className="container mt-3">
                <div className="card mb-3">
                    
                    <div className="card-header">
                        <h4 style={{ color:'#000', fontSize: '20px' }}>{this.props.name}</h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Email: <span className="details">{this.props.email}</span></li>
                            <li className="list-group-item">Phone number: <span className="details">{this.props.phone}</span> </li>
                            <li className="list-group-item">Address: <span className="details">{address}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
