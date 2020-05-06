import React from "react";
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header
        branding = "Vormiir Contact Manager"
      />
      <Contacts/>

    </div>
  );
}

export default App;
