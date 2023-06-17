import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.scss";
import Avatar from "../Avatar/Avatar";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="true">
        <Container>
          <Navbar.Brand href="#home">Posts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Обо мне</Nav.Link>
              <Nav.Link href="#link">Подробности о пользователе</Nav.Link>
              <div className="header__info">
                <Avatar></Avatar>
                <div className="header__name">Andrey Lapin</div>
                <div className="header__mail">nethack@mail.ru</div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
