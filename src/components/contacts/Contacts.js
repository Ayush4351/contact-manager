import React, { Component } from "react";
import Contact from "./Contact";
import { context } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <context.Consumer>
        {(context) => {
          const { Contacts } = context;
          return (
            <div className="container">
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              <div className="card mb-3">
                {Contacts.map((contact) => (
                  <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </context.Consumer>
    );
  }
}

export default Contacts;
