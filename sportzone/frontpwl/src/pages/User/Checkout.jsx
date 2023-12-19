import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import "../../Style/Style.css";
// import { Form } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <div className="p-5">
        <Row className="">
          <Col className="px-3">
            <h5>Checkout</h5>
          </Col>
        </Row>
        <Row className="py-2 ">
          <Col lg={8}>
            <Card className=" p-0 m-2 me-3 mb-3">
              <Card.Body>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>Alamat Pengiriman</td>

                      <td
                        className="text-warning d-flex justify-content-end"
                        colSpan={2}
                      >
                        Ubah
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                        <b>Gen V | 08654324157</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Jalan Anggrek no 59, Lampung Selatan, Lampung, 35365
                      </td>
                    </tr>
                    <tr>
                      <td className="text-primary">catatan alamat</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>

            <Card text="black" className=" p-0 m-2 me-3 mb-5">
              <Card.Body className="">
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "15%" }}>
                        <img
                          style={{
                            height: "70px",
                            background: "transparent",
                            padding: "0px",
                          }}
                          src="../../image37.png"
                          alt="gambar"
                        ></img>
                      </td>
                      <td style={{ width: "70%" }}>
                        <div>
                          <h6>judul</h6>
                        </div>
                        <div>varian</div>
                      </td>
                      <td>jumlah</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "15%" }}>
                        <img
                          style={{
                            height: "70px",
                            background: "transparent",
                            padding: "0px",
                          }}
                          src="../../image37.png"
                          alt="gambar"
                        ></img>
                      </td>
                      <td style={{ width: "70%" }}>
                        <div>
                          <h6>judul</h6>
                        </div>
                        <div>varian</div>
                      </td>
                      <td>jumlah</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <hr />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>Opsi pengiriman</td>
                    </tr>
                    <tr>
                      <td>
                        <b>JNE REGULER</b>
                      </td>
                      <td> IMG</td>
                    </tr>
                    <tr>
                      <td>Akan diterima pada tanggal 20 - 22 Nov</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card text="black" className=" p-0 m-2 me-3 mb-3">
              <Card.Body>
                <div>
                  <span>Gunakan Kupon</span>
                </div>
                <br />
                <div>
                  <form className="">
                    <div>
                      <input type="text" placeholder="KODE KUPON" />
                      <span>
                        <button style={{ border: "none", height: "30px" }}>
                          Apply
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </Card.Body>
            </Card>
            <Card text="black" className=" p-0 m-2 me-3 mb-5">
              <Card.Body>
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>Subtotal:</td>
                      <td className=" d-flex justify-content-end">total</td>
                    </tr>
                    <tr>
                      <td>Discount : </td>
                      <td className=" d-flex justify-content-end">total</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td className=" d-flex justify-content-end">
                        <b>total</b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <br />
                        <Button className="w-100">Bayar</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
