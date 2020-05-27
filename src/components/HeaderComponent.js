import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, DropdownToggle,
  DropdownMenu, DropdownItem, UncontrolledDropdown,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}

  render() {
    return(
    <React.Fragment>
    <Jumbotron>
         <div className="container">
            <div className="row row-header">
                <div className="col-12 col-sm-2 offset-sm-1 align-self-center">
                  <img className="img-responsive" src="/assets/images/logo2.gif" alt="logo" width="150" height="150"/>
                </div>
                <div className="col-12 col-sm-8">
                    <h1>Science Magazine</h1>
                    <p>Science Magazine is a peer-reviewed bimonthly journal that publishes original research papers on all aspects of power engineering (production, transmission and consumption of electricity and heat). Issues of mathematical modeling, IT support and economic analysis in power engineering are also in the scope of our journal. Both experimental and theoretical studies are accepted with preference to those concerning energy saving and ecology issues.</p>
                </div>
            </div>
        </div>
     </Jumbotron>

      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar ml-auto mr-auto>
                        <NavItem>
                            <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/content'><span className="fa fa-book fa-lg"></span> Content</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret><span class="fa fa-info fa-lg"></span> Information for </DropdownToggle>
                              <DropdownMenu right>
                                <LinkContainer to="/infauthors"><DropdownItem> Information for authors </DropdownItem></LinkContainer>
                                <LinkContainer to="/infreviewers"><DropdownItem> Information for reviewers </DropdownItem></LinkContainer>
                                <LinkContainer to="/infreaders"><DropdownItem> Information for readers </DropdownItem></LinkContainer>
                              </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle nav caret><span class="fa fa-comment fa-lg"></span> About us </DropdownToggle>
                              <DropdownMenu right>
                                <LinkContainer to="/aboutus"><DropdownItem> About a journal </DropdownItem></LinkContainer>
                                <LinkContainer to="/editorial"><DropdownItem> Editorial Board </DropdownItem></LinkContainer>
                                <LinkContainer to="/benefits"><DropdownItem> Author benefits </DropdownItem></LinkContainer>
                              </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
        </div>
      </Navbar>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(input) => this.remember = input}  />
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
       </Modal>

    </React.Fragment>
    );
  }
}

export default Header;
