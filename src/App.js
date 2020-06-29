import React from "react";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Vormiir Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContacts}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
