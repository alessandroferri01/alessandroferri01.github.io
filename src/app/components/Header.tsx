import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from "@/icons/Logo";
import ThemeSwitch from "./ThemeSwitch";


export default function Header() {
  return (
    <Navbar 
      style={{ height: "5.5rem", position: "sticky" }} 
      className="border-bottom-gradient">
      <NavbarBrand>
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Say Hello 😎
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="/CV_Alessandro_Ferri.pdf" target="blank" variant="flat">
            Download CV 📁
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
