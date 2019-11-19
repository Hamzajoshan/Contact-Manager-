import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  deleteContact = id => {
    const newContact = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: newContact
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onDeleteHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
