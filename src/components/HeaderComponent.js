import React from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">hi reactstrap</NavbarBrand>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Header</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience, Our lip-smacking creation will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
