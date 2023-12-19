import React, { useState } from "react";
import { Card, Form, Button, Col, Row, Container, Modal } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
import "../../Style/RegisterStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Edituser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="login-container y-5 pt-sm-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={10} xl={10}>
            <Card className="login-card overflow-hidden p-1 border-0 shadow-lg rounded-4">
              <Card.Body className="p-2">
                <Form>
                  <Card.Title className="welcome-title mb-4 pt-3 pb-4">
                    <b>Perbarui Data Kamu</b>
                  </Card.Title>

                  <Row>
                    {/* Left Column */}
                    <Col md={6}>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Nama Lengkap<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control type="text" className="form-control bg-light border-light password-input" placeholder="Masukkan Nama Lengkap" id="fullName" name="fullName" autoComplete="name" required />
                        </div>
                      </Form.Group>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Email<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control type="email" className="form-control bg-light border-light password-input" placeholder="Masukkan email" id="email" name="email" autoComplete="email" required />
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-1 input">
                        <Form.Label>
                          Password<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative auth-pass-inputgroup mb-3">
                          <Form.Control className="form-control bg-light border-light mb-1 password-input" placeholder="Masukkan password" type="password" id="password" name="password" autoComplete="new-password" required />
                        </div>
                      </Form.Group>
                    </Col>
                    {/* Right Column */}
                    <Col md={6}>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          Nomor HP<span className="text-danger">*</span>
                        </Form.Label>
                        <div className="form-input position-relative ">
                          <Form.Control type="number" className="form-control bg-light border-light password-input" placeholder="masukkan Nomor HP" id="nomorHP" name="nomorHP" autoComplete="nomorHP" required />
                        </div>
                      </Form.Group>
                      <Form.Group className="mt-2 input">
                        <Form.Label>
                          <b>
                            Alamat<span className="text-danger">*</span>
                          </b>
                        </Form.Label>
                        <div className="form-input position-relative">
                          <Form.Control
                            as="textarea"
                            rows={4} // Sesuaikan jumlah baris sesuai kebutuhan
                            className="form-control password-input"
                            placeholder="Masukkan Alamat"
                            id="alamat"
                            name="alamat"
                            autoComplete="alamat"
                            required
                          />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    <Button variant="primary" className="btn-signup w-100 rounded-pill mt-3 " type="submit" onClick={handleShow}>
                      Edit Profil
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>INFORMASI</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Horee, Data Kamu Berhasil di Update!</Modal.Body>
                      <Modal.Footer>
                        <Button variant="warning" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  <div className="text-center"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
