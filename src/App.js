import React from "react";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding="Vormiir Contact Manager" />
        <div className="container">
          <AddContacts />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
