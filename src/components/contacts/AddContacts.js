import React, { Component } from "react";
import { context } from "../../context";
import { v4 as uuidv4 } from "uuid";
import InputGroup from "../layouts/InputGroup";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, address } = this.state;

    //Check for validation
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required",
        },
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required",
        },
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required",
        },
      });
      return;
    }

    if (address === "") {
      this.setState({
        errors: {
          address: "Address is required",
        },
      });
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
      address,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, address, errors } = this.state;

    return (
      <context.Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter name..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <InputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <InputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <InputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <InputGroup
                    label="Address"
                    name="address"
                    value={address}
                    placeholder="Enter Address..."
                    onChange={this.onChange}
                    error={errors.address}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-dark btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </context.Consumer>
    );
  }
}

export default AddContacts;
