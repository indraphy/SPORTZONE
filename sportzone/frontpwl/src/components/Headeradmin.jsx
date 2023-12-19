import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbaradmin() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Lakukan aksi pencarian sesuai dengan query
    console.log("Mencari:", query);
  };
  return (
    <>
      <div className="m-5">
        <Navbar
          style={{ backgroundColor: "#CBE8E1" }}
          variant="light"
          fixed="top"
          collapseOnSelect
          expand="sm"
        >
          <Container>
            <Navbar.Brand ><img
                  src="../../logo.png"
                  height="50"
                  className="ms-0"
                  alt="React Bootstrap logo"
                /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link to="/dashboard-admin" className="nav-link active">Beranda</Link>
                  </li>
                  <li>
                  <Link to="/Produk-admin" className="nav-link active">Produk</Link>
                  </li>
                  <li>
                  <Link to="/pesanan-berhasil" className="nav-link active">Pesanan</Link>
                  </li>
                  <li>
                  <Link to="/pengguna" className="nav-link active">Kelola Pengguna</Link>
                  </li>
                  <li>
                  <Link to="/about-admin" className="nav-link active">About</Link>
                  </li>
              </ul>

              </Nav>
              <Navbar.Text>
                <Form onSubmit={handleSearch} className="">
                  <div className="input-group" style={{ maxWidth: "300px" }}>
                    <input
                      type="text"
                      className="form-control"
                      value={query}
                      onChange={handleInputChange}
                      placeholder="cari disini"
                    />
                    <span className="input-group-addon">
                      <Button
                        type="submit"
                        className="btnsearch btnsearch-primary"
                      >
                        cari
                      </Button>
                    </span>
                  </div>
                </Form>
              </Navbar.Text>
              <Navbar.Text className="ps-5">
                <img
                  src="../../cart.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top "
                  alt="React Bootstrap logo"
                />
              </Navbar.Text>
              <Navbar.Text className="ps-5">
                {/* <img
                  src="../../imageprofil.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top rounded-circle me-2"
                  alt="React Bootstrap logo"
                /> */}
                {"     "}
                <span><Link to="/login">Login</Link></span>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navbaradmin;
