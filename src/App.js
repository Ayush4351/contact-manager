import React from "react";
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header
        branding = "Vormiir Contact Manager"
      />
      <Contact 
        name ="Ayush"
        email = "ayush4351@gmail.com"
        phone = "9999999999"
        address = "Lakhimpur Kheri"
      />
      <Contact 
        name = "Shivam"
        email = "ayush4351@outlook.com"
        phone = "9999999999"
        address = "LPU"
      />

    </div>
  );
}

export default App;
