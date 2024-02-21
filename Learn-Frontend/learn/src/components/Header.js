import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="warning" dark>
      <NavbarBrand href="/">Learn Application</NavbarBrand>
    </Navbar>
  );
};

export default Header;
