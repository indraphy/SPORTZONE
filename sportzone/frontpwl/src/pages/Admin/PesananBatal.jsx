import { Card, Col, Row, Container,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Style/common.css";
import Navbaradmin from "../../components/Headeradmin";
export default function Pesananbatal() {
  return (
    <><Navbaradmin/>
    <Container className="py-5">
      <Row className="justify-content-center mb-2">
        <Col md={6} lg={8} className="m-2">
          <Card className="overflow-hidden border-1 rounded-2 p-3">
            <Row className="g-2">
              <Col>
                <div className=" d-flex flex-row justify-content-start ">
                  <div className="ml-3 ">
                    <Link to="/perlu-dikirim" className="text-dark nav-1">
                      Perlu Dikirim
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link to="/dikirim" className="text-dark nav-1">
                      Sedang Dikirim
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link to="/pesanan-berhasil" className="text-dark nav-1">
                      Berhasil
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link to="/pesanan-batal" className="text-dark nav-1">
                      Dibatalkan
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* Body */}
      <Row className="justify-content-center">
        <Col md={6} lg={8} className="m-2">
          <Card className="overflow-hidden border-1 rounded-2 p-4">
            {/* Baris 1 */}
            <Row>
              <Col sm={8} className="mb-3">
                <h6>deanzakir</h6>
              </Col>
              <Col sm={4} className=" text-danger text-end">
                <h6>
                  <b>Dibatalkan</b>
                </h6>
              </Col>
            </Row>
            {/* baris 2 */}
            <Row>
              <Col sm={2}>
                {" "}
                <div className="table-responsive">
                  <table className=" table-nowrap table-hover">
                    <tr>
                      <td className=" text-center">
                        <img src="/logo512.png" alt="Gambar Produk" width="80" height="80" />
                      </td>
                    </tr>
                  </table>
                </div>
              </Col>
              {/* Deskripsi - Baris 2 */}
              <Col sm={8}>
                <Row>
                  <Col className="text-start mb-5">
                    <div className="table-responsive">
                      <table className="table table-nowrap table-hover mb-0">
                        <tr>
                          <td className="text-start mb-0">
                            <p className="mb-0 pb-0">Tachikara Basket Ball Rubber</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-start">
                            <p>T7R Basket Ball</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={2} className="text-end">
                <p>Rp.180.000</p>
              </Col>
            </Row>
            {/* Baris 3 */}
            <Row className="gx-0" style={{ borderBottom: "1px solid" }}>
              <Col sm={4}>
                <h6>
                  <i>Qty : 3</i>
                </h6>
              </Col>
              <Col sm={5} className="text-end">
                <p>Total Pesanan :</p>
              </Col>
              <Col sm={3} className="text-end">
                <h4>Rp 383.000</h4>
              </Col>
            </Row>
            {/* Baris 4 */}
            <Row>
              <Col sm={6}>
                <p>No.Pesanan</p>
              </Col>
              <Col sm={6} className="text-end">
                <p>12345677</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}
