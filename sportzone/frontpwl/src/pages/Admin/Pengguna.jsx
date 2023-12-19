import {
  Card,
  Col,
  Row,
  Container,
  CardBody,
  Button,
  Pagination,
  Modal,
  CardText,
} from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbaradmin from "../../components/Headeradmin";
import { useSelector } from "react-redux";
import { selectToken } from "../../reducer/appSlice";
import axios from "axios";

export default function Pengguna() {
  const items = Array.from({ length: 2 }).map((_, index) => index + 1);
  const [showHapus, setShowHapus] = useState(false);
  const handleCloseHapus = () => setShowHapus(false);
  const handleShowHapus = () => setShowHapus(true);
  const [loading, setLoading] = useState(true);

  const token = useSelector(selectToken);

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get("http://localhost:6543/pengguna", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(({ data }) => {
          setUser(data.data);
        })
        .catch(({ response }) => {
          console.error(response.data.message ?? "Error");
        })
        .finally(() => setLoading(false));
    };
    fetchUser();
  }, []);

  return (
    <>
      {loading ? (
        <CardText>Loading...</CardText>
      ) : (
        <>
          <Navbaradmin />
          <Container>
            <Row>
              <Col className="my-5">
                <Card className="overflow-hidden p-4 pt-2 pb-2 border-0 shadow-lg rounded-2">
                  <CardBody>
                    <Row>
                      <Col>
                        <h4 className=" fw-bold">Akun Pengguna</h4>
                      </Col>
                    </Row>
                    <Row className="bg-light align-items-center align-middle ">
                      <Col sm={2}>
                        <div className="table-responsive  ">
                          <table className="table align-middle table-nowrap table-hover ">
                            <tr className="">
                              <th className="text-center justify-content-center">
                                No
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <th className="text-center justify-content-center">
                                Nama Lengkap
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <th className="text-center justify-content-center">
                                Username
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <th className="text-center justify-content-center">
                                Email
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Col>

                      <Col sm={2}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <th className="text-center justify-content-center">
                                Action
                              </th>
                            </tr>
                          </table>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col sm={2}>
                        <div className="table-responsive ">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <td className="align-middle text-center ">1</td>
                            </tr>
                          </table>
                        </div>
                      </Col>

                      <Col sm={3}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr className=" text-align-center ">
                              <td className="text-center justify-content-center">
                                Dean Andhika Ramadan
                              </td>
                            </tr>
                          </table>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr className=" text-align-center ">
                              <td className="text-center justify-content-center">
                                deanzakir
                              </td>
                            </tr>
                          </table>
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <td className="text-center justify-content-center">
                                Dean1212@gmail.com
                              </td>
                            </tr>
                          </table>
                        </div>
                      </Col>

                      <Col sm={2}>
                        <div className="table-responsive">
                          <table className="table align-middle table-nowrap table-hover">
                            <tr>
                              <td className="text-center justify-content-center">
                                <Link>
                                  <Button variant="warning" size="sm">
                                    Detail
                                  </Button>
                                </Link>
                              </td>
                              <td className="text-center justify-content-center">
                                <Link>
                                  <Button
                                    className="Action"
                                    variant="danger"
                                    size="sm"
                                    onClick={handleShowHapus}
                                  >
                                    Hapus
                                  </Button>

                                  <Modal
                                    className="Action"
                                    show={showHapus}
                                    onHide={handleCloseHapus}
                                    backdrop="static"
                                    keyboard={false}
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Catatan!!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      Apakah Anda yakin ingin menghapus akun
                                      ini?
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        variant="danger"
                                        onClick={handleCloseHapus}
                                      >
                                        Batal
                                      </Button>
                                      <Button variant="success">Hapus</Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </Col>
                    </Row>

                    {user.map((item, index) => (
                      <Row className="mt-3" key={index}>
                        <Col sm={2}>
                          <div className="table-responsive ">
                            <table className="table align-middle table-nowrap table-hover">
                              <tr>
                                <td className="align-middle text-center ">
                                  {index+2}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </Col>

                        <Col sm={3}>
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-hover">
                              <tr className=" text-align-center ">
                                <td className="text-center justify-content-center">
                                  {item.email}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </Col>
                        <Col sm={2}>
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-hover">
                              <tr className=" text-align-center ">
                                <td className="text-center justify-content-center">
                                  {item.username}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </Col>
                        <Col sm={3}>
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-hover">
                              <tr>
                                <td className="text-center justify-content-center">
                                  {item.email}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </Col>

                        <Col sm={2}>
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-hover">
                              <tr>
                                <td className="text-center justify-content-center">
                                  <Link>
                                    <Button variant="warning" size="sm">
                                      Detail
                                    </Button>
                                  </Link>
                                </td>
                                <td className="text-center justify-content-center">
                                  <Link>
                                    <Button
                                      className="Action"
                                      variant="danger"
                                      size="sm"
                                      onClick={handleShowHapus}
                                    >
                                      Hapus
                                    </Button>

                                    <Modal
                                      className="Action"
                                      show={showHapus}
                                      onHide={handleCloseHapus}
                                      backdrop="static"
                                      keyboard={false}
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title>Catatan!!</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        Apakah Anda yakin ingin menghapus akun
                                        ini?
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button
                                          variant="danger"
                                          onClick={handleCloseHapus}
                                        >
                                          Batal
                                        </Button>
                                        <Button variant="success">Hapus</Button>
                                      </Modal.Footer>
                                    </Modal>
                                  </Link>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </Col>
                      </Row>
                    ))}
                    {/* Pagination Section */}
                    <Row>
                      <Col className="d-flex justify-content-end ">
                        <Pagination className="primary">
                          <Pagination.First className="rounded-pill" />
                          <Pagination.Prev className="rounded-pill" />
                          {items.map((item) => (
                            <Pagination.Item
                              key={item}
                              className="rounded-pill"
                            >
                              {item}
                            </Pagination.Item>
                          ))}
                          <Pagination.Next className="rounded-pill" />
                          <Pagination.Last className="rounded-pill" />
                        </Pagination>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
