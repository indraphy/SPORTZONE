import React, {  } from "react";
import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbaradmin from "../../components/Headeradmin";

export default function Aboutadmin() {
  return (
    <><Navbaradmin/>
    <Container>
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col lg={5} xl={6} className="my-5">
          <Card className="aboutAdmin-card overflow-hidden p-4 pt-2 pb-2 border-0 shadow-lg rounded-4">
            <Card.Body>
              <Card.Title className="welcome-title mb-2 pt-1 pb-4">
                <b>ABOUT</b>
              </Card.Title>
              <Form>
                <Row>
                  {/* Left Column */}
                  <Col>
                    <Form.Group className="mt-2 input">
                      <Form.Label>
                        <b>Judul</b>
                      </Form.Label>
                      <div className="form-input position-relative ">
                        <Form.Control type="text" className="form-control   password-input" placeholder="Masukkan Judul untuk Halaman About" id="judul" name="judul" autoComplete="judul" required />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mt-2 input">
                      <Form.Label>
                        <b>Deskripsi</b>
                      </Form.Label>
                      <div className="form-input position-relative">
                        <Form.Control
                          as="textarea"
                          rows={6} // Sesuaikan jumlah baris sesuai kebutuhan
                          className="form-control password-input"
                          placeholder="Masukkan Deskripsi"
                          id="deskripsi"
                          name="deskripsi"
                          autoComplete="deskripsi"
                          required
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mt-2 input">
                      <Form.Label>Pilih Gambar</Form.Label>
                      <div className="form-input position-relative">
                        <Form.Control type="file" accept="image/*" required />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex justify-content-end">
                      <Link to="/panel/aboutSuccess">
                        <Button variant="success" className="btn-table rounded-pill custom-button ">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

