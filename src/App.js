import React, { Component } from "react";
import Contacts from "./Components/contacts/contacts";
import Header from "./Components/layout/header";
import AddContacts from "./Components/contacts/addContacts";
import { Provider } from "./context";
import NotFound from "./Components/layout/notFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/addContacts" component={AddContacts} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
