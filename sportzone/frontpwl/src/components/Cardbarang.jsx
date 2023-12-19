import React, { useEffect, useState } from "react";
import { Card, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../reducer/appSlice";

export default function CardBarang({ productList }) {
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(true);
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const fetchProduk = async () => {
      axios
        .get("http://localhost:6543/product", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(({ data }) => {
          console.log(data.data);
          setProduk(data.data);
        })
        .catch(({ response }) => alert(response.data.message ?? "Error"))
        .finally(() => setIsLoading(false));
    };
    fetchProduk();
  }, []);

  return (
    <>
      {isLoading ? (
        <CardText>Loading...</CardText>
      ) : (
        <>
          {productList.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <Card
                key={product.id}
                text="black"
                className=" p-0 m-2 me-3 mb-5"
              >
                <Card.Body className="">
                  <Card.Img
                    className=""
                    src={product.imageSrc}
                    style={{
                      borderRadius: "6px",
                      maxHeight: "120px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="h6 ">{product.price}</Card.Text>
                  <Card.Text className="">{product.name}</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          ))}
          {produk.map((item, index) => (
            <Link
              key={index}
              to={`/product/${item.id}`}
              className="text-decoration-none"
            >
              <Card key={item.id} text="black" className=" p-0 m-2 me-3 mb-5">
                <Card.Body className="">
                  <Card.Img
                    className=""
                    src={'https://www.bhinneka.com/blog/wp-content/uploads/2021/10/Cumal-Cemil-Paper-Pouch-Packaging-Mockup.jpg'}
                    style={{
                      borderRadius: "6px",
                      maxHeight: "120px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Card.Body>
                <Card.Footer>
                  <Card.Text className="h6 ">{item.harga}</Card.Text>
                  <Card.Text className="">{item.nama}</Card.Text>
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </>
      )}
    </>
  );
}
