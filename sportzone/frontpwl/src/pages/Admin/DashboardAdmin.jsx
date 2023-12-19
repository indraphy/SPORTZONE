import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../../Style/DashboardAdm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbaradmin from "../../components/Headeradmin";

export default function Dashboardadmin() {
  return (
    <>
    <Navbaradmin/>
    <div className="py-5">
    <Row>
      <Col lg={3}>
        <Link to="/produk-admin" className="nav-link">
          <Card className="cardadmin">
            <Card.Body className="pt-0">
              <table className="mb-0 pt-0">
                <tbody>
                  <tr>
                    <th className="fs-1">9</th>
                    <td rowSpan="2">
                      <img alt="" style={{ height: "70px", background: "transparent", padding: "0px", marginTop: "20px" }}></img>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Produk</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer style={{ borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }} className="cardadmin-footer">
              Kelola
            </Card.Footer>
          </Card>
        </Link>
      </Col>
      <Col lg={3}>
        <Link to="/perlu-dikirim" className="nav-link">
          <Card className="cardadmin">
            <Card.Body className="pt-0">
              <table className="mb-0 pt-0">
                <tbody>
                  <tr>
                    <th className="fs-1">8</th>
                    <td rowSpan="2">
                      <img alt="" style={{ height: "80px", background: "transparent", padding: "0px", marginTop: "10px" }}></img>
                    </td>
                  </tr>
                  <tr>
                    <td>Pesanan Perlu Dikirim</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer style={{ borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }} className="cardadmin-footer">
              Kelola
            </Card.Footer>
          </Card>
        </Link>
        <Link to="/panel/return-validation" className="nav-link"></Link>
      </Col>
      <Col lg={3}>
        <Link to="/pesanan-berhasil" className="nav-link">
          <Card className="cardadmin">
            <Card.Body className="pt-0">
              <table className="mb-0 pt-0">
                <tbody>
                  <tr>
                    <th className="fs-1">5</th>
                    <td rowSpan="2">
                      <img alt="" style={{ height: "70px", background: "transparent", padding: "0px", marginLeft: "20px", marginTop: "20px" }}></img>
                    </td>
                  </tr>
                  <tr>
                    <td>Pesanan Selesai</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer style={{ borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }} className="cardadmin-footer">
              Kelola
            </Card.Footer>
          </Card>
        </Link>
      </Col>
      <Col lg={3}>
        <Link to="/pengguna" className="nav-link">
          <Card className="cardadmin">
            <Card.Body className="pt-0">
              <table className="mb-0 pt-0">
                <tbody>
                  <tr>
                    <th className="fs-1">7</th>
                    <td rowSpan="2">
                      <img alt="" style={{ height: "70px", background: "transparent", padding: "0px", marginTop: "20px" }}></img>
                    </td>
                  </tr>
                  <tr>
                    <td>Akun Pengguna</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer style={{ borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }} className="cardadmin-footer">
              Kelola
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    </Row>
    </div>
    </>
  );
}
