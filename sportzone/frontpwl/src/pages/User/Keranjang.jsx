import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Navbarku from "../../components/Header";
import "../../Style/Style.css";
import { Link } from "react-router-dom";
// import { Form } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/CartActions';
import { selectCart } from "../../reducer/appSlice";


export default function Keranjang({target}) {

  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <Navbarku />
      <div className="p-5">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <><Row className="">
              <Col className="px-3">
                <h5>Keranjang Saya</h5>
              </Col>
            </Row><Row className="py-2 ">
                <Col lg={8}>
                  <Card text="black" className=" p-0 m-2 me-3 mb-5">
                    <Card.Header>
                      <Row>
                        <Col>
                        <Link to={`/product/${cartItems}`}>
                          <Button>Kembali</Button>
                        </Link>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <Button variant="outline-secondary" size="sm">
                            Hapus semua
                          </Button>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body className="">
                      <table style={{ width: "100%" }}>
                      {cartItems.map((item) => (
                        <><tr key={item.id}>
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
                              <h6>{item.name}</h6>
                            </div>
                            <div>{item.price}</div>
                            <div>
                              <Button
                              onClick={() => handleRemoveFromCart(item.id)}
                                variant="outline-danger"
                                size="sm"
                                style={{
                                  width: "",
                                  height: "30px",
                                  padding: "3px",
                                }}
                              >
                                remove
                              </Button>
                            </div>
                          </td>
                          <td>Quantity: {item.quantity}</td>
                        </tr><tr>
                            <td colSpan={3}>
                              <hr />
                            </td>
                          </tr></>
                        ))}
                        
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
                            <Link to="/checkout">
                              <Button className="w-100">Bayar</Button>
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </Card.Body>
                  </Card>
                </Col>
              </Row></>
        )}
      </div>
    </>
  );
}
