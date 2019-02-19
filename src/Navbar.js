import React from 'react';
import logonutricion from './logonutricion.PNG';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/"><img src={logonutricion} height="85" alt="logonutricion"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link style={{color:'black', font:'bold'}} to={"/About.js/"}>About&nbsp;</Link>
                            </NavItem>
                            <NavItem>
                            <Link style={{color:'black', font:'bold'}} to={"/Consulta.js/"}>Consulta &nbsp;</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle style={{color:'black'}} nav caret>
                                    Redes Sociales
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavItem>
                                <NavLink style={{color:'black'}} href="https://www.facebook.com/luciaescobarnutricionista/">Facebook</NavLink>
                            </NavItem>
                  </DropdownItem>
                                    <DropdownItem>
                                    <NavItem>
                                <NavLink style={{color:'black'}} href="https://www.instagram.com/luciaescobarnutricionista/?hl=es-la">Instagram</NavLink>
                            </NavItem>
                  </DropdownItem>
                                    <DropdownItem divider />
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

/*Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}

NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
}*/