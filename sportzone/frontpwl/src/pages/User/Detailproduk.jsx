import React, { useEffect, useState } from "react";
import { Button, Card, CardFooter, CardHeader, CardText, Col, Row } from "react-bootstrap";
import Navbarku from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, increaseQuantity } from "../../actions/CartActions";
import axios from "axios";
import { addcart, cart, selectCart, selectToken } from "../../reducer/appSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const token = useSelector(selectToken);
  const [target, setTarget] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);

  const handleAddToCart = () => {
    const existingProduct = cartItems.find((item) => item.id === target.id);

    if (existingProduct) {
      dispatch(cart(existingProduct.id));
    } else {
      dispatch(addcart({ ...target, quantity: 1 }));
    }
  };

  useEffect(() => {
    const fetchDetail = async () => {
      axios
        .get("http://localhost:6543/product/detail/" + id, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setTarget(data.data);
        })
        .catch(({ response }) => {
          alert(response.data.message ?? "Error");
        })
        .finally(() => setIsLoading(false));
    };
    fetchDetail();
  }, []);

  return (
    <>
      <Navbarku />
      {isLoading ? (
        <CardText>Loading..</CardText>
      ) : (
        <Row className="py-5 px-2 g-2">
          <Col md>
            <Card text="black" className=" p-0 m-2 me-3 mb-5">
              <CardHeader>{target.nama}</CardHeader>
              <Card.Body className="">
                <Card.Img
                  className=""
                  src={"../../image37.png"}
                  style={{
                    borderRadius: "6px",
                    height: "80%",
                    objectFit: "cover",
                    width: "80%",
                  }}
                />
              </Card.Body>
              <CardFooter style={{ fontWeight: "bolder" }}>Harga: {target.harga}</CardFooter>
            </Card>
          </Col>
          <Col md>
            <div>
              <h1>{target.name}</h1>
            </div>
            <br />
            <br />
            <div>
              <h3>{target.price}</h3>
            </div>
            <br />
            <div>
              <span>Pilih Jumlah</span>
            </div>
            <div>
              <Row className="g-2">
                <Col md>
                  {" "}
                  <Button className="me-5">plus minus</Button>{" "}
                </Col>
                <Col md>
                  {" "}
                  <Link to="" className="text-decoration-none me-3">
                    <Button onClick={handleAddToCart}>Tambah ke keranjang</Button>
                  </Link>
                </Col>
                <Col md>
                  {" "}
                  <Button>Beli sekarang </Button>
                </Col>
              </Row>
            </div>
            <br />
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}
