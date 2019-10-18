import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

export default class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              MERN Book Rental
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://github.com/quandarealest">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
  )
  }
}
