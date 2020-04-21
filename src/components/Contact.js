import React, { Component } from 'react';
import '../App.css';
import PropTypes from -'prop-types';

class Contact extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="card mb-3">
                    
                    <div className="card-header">
                        <h4 style={{ color:'#000', fontSize: '20px' }}>Ayush Gupta</h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Email: <span className="details">ayush4351@gmail.com</span></li>
                            <li className="list-group-item">Phone number: <span className="details">9999999999</span> </li>
                            <li className="list-group-item">Address: <span className="details">Lakhimpur Kheri</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
