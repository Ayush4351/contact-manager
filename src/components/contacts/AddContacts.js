import React, { Component } from "react";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  render() {
    const { name, email, phone, address } = this.state;
    return (
      <div className="card mb-3 mt-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone"
                value={phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg"
                placeholder="Enter address"
                value={address}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContacts;
