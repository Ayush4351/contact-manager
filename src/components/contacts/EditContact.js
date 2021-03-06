import React, { Component } from "react";
import { context } from "../../context";
import InputGroup from "../layouts/InputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

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

    const updateContact = {
      name,
      email,
      phone, 
    }

    const { id } = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

    dispatch({type: 'UPDATE_CONTACT', payload: res.data})

    //Clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <context.Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3 mt-3">
              <div className="card-header">Edit Contact</div>
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
                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;
