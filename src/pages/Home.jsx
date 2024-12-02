import { useState, useEffect, useCallback } from "react";

// Import bootstraps components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Carousel from "react-bootstrap/Carousel";

// Import ReactTyped tag
import { ReactTyped } from "react-typed";

// Import pie chart tag
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Col from "react-bootstrap/esm/Col";

// App praises
const praises = [
  "dễ dàng",
  "tiện lợi",
  "nhanh",
  "hiện đại",
  "thân thiện",
  "đơn giản",
  "tiết kiệm",
  "linh hoạt",
];

// Pie graph settings
const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["orange", "blue", "darkcyan", "lightblue"];
const data = [
  { label: "Pie", value: 400 },
  { label: "Different pie", value: 300 },
  { label: "Another pie", value: 300 },
  { label: "Not pie", value: 200 },
];

const Home = () => {
  // Change active pie section display
  const [itemData, setItemData] = useState(null);

  return (
    <Container
      className="heroimage-background"
      style={{
        backgroundImage: "url(/src/assets/BK.jpg)",
        backgroundPosition: "bottom center",
        backgroundSize: "110%",
        maxWidth: 100 + "%",
        height: 120 + "dvh",
        margin: 0 + "px",
        padding: 0 + "px",
      }}
    >
      <div
        className="mask"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          width: 100 + "%",
          height: 93 + "dvh",
        }}
      >
        <div
          className="d-flex"
          style={{
            height: 93 + "dvh",
            padding: 10 + "dvh",
          }}
        >
          <div className="d-flex" style={{ width: 100 + "%" }}>
            <div
              className="flex-grow-1 flex-shrink-1 pt-5"
              style={{ maxWidth: 70 + "%" }}
            >
              <div className="text-white">
                <h1
                  className="mb-3"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: 50 + "px",
                  }}
                >
                  Giúp in ấn trở nên {" "}
                  <ReactTyped
                    backSpeed={50}
                    strings={praises}
                    typeSpeed={50}
                    loop={true}
                  />
                </h1>
                <h5
                  className="mb-4"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Mọi thứ là có thể với {" "}
                  {import.meta.env.VITE_APPLICATION_NAME}
                </h5>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/features"
                  role="button"
                >
                  Tìm hiểu thêm
                </a>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ marginTop: 100 + "px" }}
              >
                <div
                  className="card"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    width: 420 + "px",
                  }}
                >
                  <div className="card-header">
                    <div className="d-flex justify-content-center text-white">
                      <h4 className="mb-0">Những thành tích</h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-center text-white">
                          5+
                        </div>
                        <div className="d-flex justify-content-center align-items-center text-white">
                          <div>
                          <i className="fa-solid fa-calendar"></i> Năm
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-center text-white">
                          1M+
                        </div>
                        <div className="d-flex justify-content-center align-items-center text-white">
                          <div>
                            <i className="fa-solid fa-user"></i> Users
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-center text-white">
                          6.9M$
                        </div>
                        <div className="d-flex justify-content-center align-items-center text-white">
                          <div>
                            <i className="fa-solid fa-chart-line"></i> Token
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="d-flex justify-content-center text-white">
                          3M+
                        </div>
                        <div className="d-flex justify-content-center align-items-center text-white">
                          <div>
                            <i className="fa-solid fa-thumbs-up"></i> Follows
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
