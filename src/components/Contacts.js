import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    constructor()
    {
        super();
        this.state = {

            Contacts: [

                {
                    id: 1,
                    name: "Ayush Gupta",
                    email: "ayush4351@gmail.com",
                    phone: 8299021887,
                    address: "Lakhimpur Kheri"
                },
                {
                    id: 2,
                    name: "Saffan Khan",
                    email: "ksaffan190@gmail.com",
                    phone: 9557391315,
                    address: "Aonla"
                },
                {
                    id: 3,
                    name: "Soham Nandi",
                    email: "sohamnandi007@gmail.com",
                    phone: 9557391315,
                    address: "Bahadur Garh"
                },
                {
                    id: 4,
                    name: "Arpit Porwal",
                    email: "arpit.porwal@vormiir.com",
                    phone: 9557391315,
                    address: "Kanpur"
                },
                {
                    id: 5,
                    name: "Anish Kumar",
                    email: "anish.kumar@vormiir.com",
                    phone: 9557391315,
                    address: "Arrah"
                },
                {
                    id: 6,
                    name: "Jayendra Singh",
                    email: "jayendra.singh@vormiir.com",
                    phone: 9557391315,
                    address: "Lakhimpur Kheri"
                },


            ]

        }
    }
    
    deleteContact = (id) => {
        const { Contacts } = this.state
        //console.log(Contacts)
        const newContacts = Contacts.filter(contact => contact.id != id);
        this.setState({
            Contacts: newContacts
        })
    }
    
    render() {
        
        const {Contacts} = this.state;
        
        return (
            <React.Fragment>
                {Contacts.map( contact => 
                    <Contact
                        key = {contact.id} 
                        name = {contact.name}
                        email = {contact.email}
                        phone = {contact.phone}
                        address = {contact.address}
                        deleteClickHandler = {this.deleteContact.bind(this, contact.id)} 
                    /> )}
            </React.Fragment>
        )
    }
}


export default Contacts