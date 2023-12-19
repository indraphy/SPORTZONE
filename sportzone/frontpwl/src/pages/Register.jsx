import React, { useState } from "react";
import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Style/RegisterStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarku from "../components/Header";
import axios from "axios"

function Register() {
  const [account, setAccount] = useState({
    "email": '',
    "password": '',
    "nama": '',
    "nomorHp": ''
  })

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    axios.post("http://127.0.0.1:6543/register", {
      email: account.email,
      password: account.password,
      monor_hp: account.nomorHp,
      nama: account.nama
    })
    .then(({ data }) => {
      navigate("/dashboard")
    })
    .catch(({ response }) => {
      console.error(response)
      alert('error')
    })
  };

  return (
    <>
    <Navbarku/>
    <div className="login-container y-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="login-card overflow-hidden p-4 border-0 shadow-lg rounded-4">
              <Card.Body className="p-sm-2">
                <Form onSubmit={handleSubmit}>
                  <Card.Title className="welcome-title mb-4 pt-1 pb-4">
                    <b>Silahkan Mendaftar Untuk Mengakses SPORT ZONE</b>
                  </Card.Title>
                  <Row>
                    {/* Left Column */}
                    <Col md={6}>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Nama Lengkap<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control type="text" value={account.nama} onChange={(e) => setAccount({ ...account, nama: e.target.value })} className="form-control bg-light border-light password-input" placeholder="Masukkan Nama Lengkap" id="fullName" name="fullName" autoComplete="name" required />
                        </div>
                      </Form.Group>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Email<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control value={account.email} onChange={(e) => setAccount({ ...account, email: e.target.value })} type="email" className="form-control bg-light border-light password-input" placeholder="Masukkan email" id="email" name="email" autoComplete="email" required />
                        </div>
                      </Form.Group>
                    </Col>

                    {/* Right Column */}
                    <Col md={6}>
                      <Form.Group className="mb-1 input">
                        <Form.Label>
                          Password<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative auth-pass-inputgroup mb-3">
                          <Form.Control
                            className="form-control bg-light border-light mb-1 password-input"
                            placeholder="Masukkan password"
                            type={"password"}
                            // type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            autoComplete="new-password"
                            required
                            value={account.password}
                            onChange={(e) => setAccount({ ...account, password: e.target.value })}
                          />
                        </div>
                      </Form.Group>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Nomor HP<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control value={account.nomorHp} type="number" onChange={(e) => setAccount({ ...account, nomorHp: e.target.value })} className="form-control bg-light border-light password-input" placeholder="masukkan Nomor HP" id="nomorHP" name="nomorHP" autoComplete="nomorHP" required />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    {/* <Link to="/login" className="nav-link"> */}
                      <Button className="btn-signup w-100 rounded-pill mt-3 " type="submit" variant="primary">
                        Sign Up
                      </Button>
                    {/* </Link> */}
                  </div>
                  <div className="text-center"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Register;
