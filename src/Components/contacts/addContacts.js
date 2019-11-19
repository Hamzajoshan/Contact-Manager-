import React, { Component } from "react";

class addContacts extends Component {
  state = {
    name: "",
    phone: "",
    email: ""
  };
  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitted = e => {
    const { name, phone, email } = this.state;
    e.preventDefault();
    alert(`${name}, ${phone}, ${email}`);
  };

  render() {
    const { name, phone, email } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={this.submitted}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                onChange={this.inputHandler}
                type="text"
                name="name"
                placeholder="Zahir ul Islam"
                required
                className="form-control"
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                onChange={this.inputHandler}
                type="number"
                name="phone"
                placeholder="9353087175"
                required
                className="form-control"
                value={phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input
                onChange={this.inputHandler}
                type="email"
                name="email"
                placeholder="zahir.linkinpark@gmail.com"
                required
                className="form-control"
                value={email}
              />
            </div>
            <input
              type="submit"
              value="Add New Contact"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default addContacts;
