import React, { Component } from "react";
import "../../App.css";
import { context } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: true,
  };

  onClickDelete = (id, dispatch) => {
    //console.log(id, dispatch);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    //we can destructure the prop if we don't want to use this.props everytime
    const { id, address } = this.props;
    const { showContactInfo } = this.state;
    return (
      <context.Consumer>
        {(context) => {
          const { dispatch } = context;
          return (
            <div className="container mt-3">
              <div className="card mb-3">
                <div className="card-header">
                  <div className="row">
                    <div
                      className="col-md-6 col-lg-6"
                      onClick={() => {
                        this.setState({
                          showContactInfo: !this.state.showContactInfo,
                        });
                      }}
                    >
                      <h4
                        style={{
                          color: "#000",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        {this.props.name} <i className="fas fa-sort-down"></i>
                      </h4>
                    </div>
                    <div className="col-md-6 col-lg-6 text-right">
                      <i
                        className="fas fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={this.onClickDelete.bind(this, id, dispatch)}
                      ></i>
                    </div>
                  </div>
                </div>
                {showContactInfo ? null : (
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Email:
                        <span className="details">{this.props.email}</span>
                      </li>
                      <li className="list-group-item">
                        Phone number:
                        <span className="details">{this.props.phone}</span>
                      </li>
                      <li className="list-group-item">
                        Address: <span className="details">{address}</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </context.Consumer>
    );
  }
}

export default Contact;
