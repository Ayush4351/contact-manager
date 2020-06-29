import React, { Component } from "react";

export const context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        Contacts: state.Contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        Contacts: [action.payload, ...state.Contacts]
      };
    default:
      return state;
  }
};

class Provider extends Component {
  state = {
    Contacts: [
      {
        id: 1,
        name: "Ayush Gupta",
        email: "ayush4351@gmail.com",
        phone: 8299021887,
        address: "Lakhimpur Kheri",
      },
      {
        id: 2,
        name: "Saffan Khan",
        email: "ksaffan190@gmail.com",
        phone: 9557391315,
        address: "Aonla",
      },
      {
        id: 3,
        name: "Soham Nandi",
        email: "sohamnandi007@gmail.com",
        phone: 9557391315,
        address: "Bahadur Garh",
      },
      {
        id: 4,
        name: "Arpit Porwal",
        email: "arpit.porwal@vormiir.com",
        phone: 9557391315,
        address: "Kanpur",
      },
      {
        id: 5,
        name: "Anish Kumar",
        email: "anish.kumar@vormiir.com",
        phone: 9557391315,
        address: "Arrah",
      },
      {
        id: 6,
        name: "Jayendra Singh",
        email: "jayendra.singh@vormiir.com",
        phone: 9557391315,
        address: "Lakhimpur Kheri",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export default Provider;
