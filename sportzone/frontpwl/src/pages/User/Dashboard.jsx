import React from "react";
// import "../../Style/Style.css";
import Navbarku from "../../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import CardBarang from "../../components/Cardbarang";


const Dashboard = () => {
  const products = [
  { 
    id: 1,
      imageSrc: "../../image37.png",
      price: "Rp10.000",
      name: "Botol minum",
      description: "deskripsi",
  },
  { 
    id: 2,
      imageSrc: "../../image37.png",
      price: "Rp10.000",
      name: "Batu bata",
      description: "deskripsi",
  },
  { 
    id: 3,
      imageSrc: "../../image37.png",
      price: "Rp10.000",
      name: "Lemari",
      description: "deskripsi",
  },
  { 
    id: 4,
      imageSrc: "../../image37.png",
      price: "Rp10.000",
      name: "Sepatu",
      description: "deskripsi",
  },
  ];
  return (
    <>
      <Navbarku />
      <div className="py-5">
        <Container className="">
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "1100px", height: "100%" }}>
                <img
                  src="../../sportzone.png"
                  alt="DASHBOARD"
                  style={{
                    borderRadius: "50px",
                    // maxHeight: "120px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-center">
                <h5>BEST SELLER PRODUCTS</h5>
                <p>Cari Produk Olahraga yang Kamu Butuhkan</p>
              </div>
            </Col>
          </Row>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="mb-4 d-flex justify-content-center"
          >
            <CardBarang productList={products} />
          </Row>
          <Row></Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
