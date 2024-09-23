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
  "easier",
  "better",
  "enjoyable",
  "effortless",
  "seamless",
  "smoother",
  "efficient",
  "simpler",
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
        backgroundImage: "url(/src/assets/hero.jpg)",
        backgroundPosition: "center center",
        backgroundSize: "100%",
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
              style={{ maxWidth: 60 + "%" }}
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
                  Make teamwork{" "}
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
                  Everything is possible with{" "}
                  {import.meta.env.VITE_APPLICATION_NAME}
                </h5>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/features"
                  role="button"
                >
                  Find out more
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
                      <h4 className="mb-0">What we have achieved</h4>
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
                            <i className="fa-solid fa-user"></i> Years
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
                            <i className="fa-solid fa-chart-line"></i> Profit
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
            <div
              className="flex-shrink-0-demo-part"
              style={{
                width: 40 + "%",
                backgroundColor: "rgba(0, 0, 0, 0.55)",
                borderRadius: 15 + "px",
                padding: 12 + "px",
                overflowY: "auto",
                scrollbarWidth: 0 + "px",
              }}
            >
              <Row
                style={{
                  width: 100 + "%",
                  margin: 0 + "px",
                }}
              >
                <div className="col-7 p-0">
                  <div
                    className="card border-success mb-3"
                    style={{
                      maxWidth: 100 + "%",
                      borderRadius: 15 + "px",
                      marginRight: 12 + "px",
                      height: 100 + "%",
                    }}
                  >
                    <div className="card-header bg-transparent border-success">
                      Task completed <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="card-body text-success">
                      <h5 className="card-title">Reply customer email</h5>
                      <p className="card-text">
                        Reply customer about information on the new product
                      </p>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <i className="fa-solid fa-clock"></i> 11:30{" "}
                      <i className="fa-solid fa-angles-right"></i> 13:30
                    </div>
                  </div>
                </div>
                <div className="col-5 p-0">
                  <div
                    className="card mb-3 mx-auto"
                    style={{
                      width: 100 + "%",
                      borderRadius: 15 + "px",
                      marginRight: 12 + "px",
                      height: 100 + "%",
                    }}
                  >
                    <div className="card-header bg-transparent border-success">
                      <i className="fa-solid fa-chart-pie"></i> Random pie chart
                    </div>
                    <div className="card-body d-flex justify-content-center p-2">
                      <PieChart
                        colors={palette}
                        series={[
                          {
                            data: data,
                            innerRadius: 25,
                            paddingAngle: 0,
                            cornerRadius: 5,
                            startAngle: -64,
                            endAngle: 249,
                          },
                        ]}
                        slotProps={{
                          legend: { hidden: true },
                        }}
                        {...pieParams}
                        width={120}
                        height={120}
                        onItemClick={(event, d) => setItemData(d)}
                      />
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      <i
                        className="fa-solid fa-circle"
                        style={{
                          color: itemData
                            ? palette[itemData.dataIndex]
                            : "grey",
                        }}
                      ></i>{" "}
                      {itemData
                        ? data[itemData.dataIndex].label +
                          ": " +
                          data[itemData.dataIndex].value
                        : "Select a section..."}
                    </div>
                  </div>
                </div>
              </Row>
              <Row
                style={{
                  width: 100 + "%",
                  margin: 0 + "px",
                }}
              >
                <div className="col p-0" style={{ marginTop: 12 + "px" }}>
                  <div
                    className="card"
                    style={{
                      width: 100 + "%",
                      borderRadius: 15 + "px",
                      marginRight: 12 + "px",
                    }}
                  >
                    <div className="card-header bg-transparent border-success">
                      <Row className="align-items-center">
                        <div className="col-6">
                          <i className="fa-solid fa-list-check"></i> Section 1
                          tasks
                        </div>
                        <div className="col">
                          <ProgressBar>
                            <ProgressBar
                              variant="success"
                              now={20}
                              key={1}
                              label={"20%"}
                            />
                            <ProgressBar
                              variant="warning"
                              now={20}
                              key={2}
                              label={"20%"}
                            />
                          </ProgressBar>
                        </div>
                      </Row>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          <Form.Check
                            inline
                            label="You need to do this task"
                            name="group1"
                            type="checkbox"
                          />
                          <span className="badge bg-primary rounded-pill">
                            14:30 <i className="fa-solid fa-clock"></i>
                          </span>
                        </li>
                        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          <Form.Check
                            inline
                            label="You also need to do this other task"
                            name="group1"
                            type="checkbox"
                          />
                          <span className="badge bg-primary rounded-pill">
                            15:00 <i className="fa-solid fa-clock"></i>
                          </span>
                        </li>
                        <li className="list-group-item  list-group-item-action d-flex justify-content-between align-items-center">
                          <Form.Check
                            inline
                            label="Yet another task you need to do"
                            name="group1"
                            type="checkbox"
                          />
                          <span className="badge bg-primary rounded-pill">
                            17:15 <i className="fa-solid fa-clock"></i>
                          </span>
                        </li>
                        <li className="list-group-item  list-group-item-action list-group-item-warning d-flex justify-content-between align-items-center">
                          <Form.Check
                            inline
                            label="This task is being reviewed"
                            name="group1"
                            type="checkbox"
                            disabled={true}
                            checked={true}
                          />
                          <span className="badge bg-primary rounded-pill">
                            12:25 <i className="fa-solid fa-clock"></i>
                          </span>
                        </li>
                        <li className="list-group-item  list-group-item-action list-group-item-success d-flex justify-content-between align-items-center">
                          <Form.Check
                            inline
                            label="You have completed this task"
                            name="group1"
                            type="checkbox"
                            disabled={true}
                            checked={true}
                          />
                          <span className="badge bg-primary rounded-pill">
                            10:00 <i className="fa-solid fa-clock"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Row>
              <Row
                style={{
                  width: 100 + "%",
                  margin: 0 + "px",
                }}
              >
                <div className="col-5 p-0" style={{ marginTop: 12 + "px" }}>
                  <Carousel
                    style={{ marginRight: 12 + "px", height: 101.5 + "%" }}
                  >
                    <Carousel.Item>
                      <div className="card p-2" style={{ height: 340 + "px" }}>
                        <img
                          src="/src/assets/soukaku.webp"
                          className="card-img-top"
                          style={{
                            borderRadius: 100 + "%",
                            border: "solid",
                            borderColor: "lightblue",
                          }}
                        />
                        <div
                          className="card-footer bg-transparent border-success mt-4 p-0 pt-1"
                          style={{ fontSize: 14 + "px" }}
                        >
                          <i className="fa-solid fa-snowflake"></i> Soukaku -
                          Ice Support
                          <br />
                          <div style={{ textDecoration: "underline" }}>
                            Recommended set:
                          </div>
                          <i className="fa-solid fa-music"></i> Swing Jazz - 4pc
                          <br />
                          <i className="fa-solid fa-syringe"></i> Hormone Punk -
                          2pc
                          <div style={{ textDecoration: "underline" }}>
                            Recommended W-engine:
                          </div>
                          <i className="fa-solid fa-star"></i> Bashful Demon
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="card p-2" style={{ height: 340 + "px" }}>
                        <img
                          src="/src/assets/bangboo18.webp"
                          className="card-img-top"
                          style={{
                            borderRadius: 100 + "%",
                            border: "solid",
                            borderColor: "lightblue",
                          }}
                        />
                        <div
                          className="card-footer bg-transparent border-success mt-4 p-0 pt-1"
                          style={{ fontSize: 14 + "px" }}
                        >
                          <i className="fa-solid fa-robot"></i> BangBoo18
                          <br />
                          <div style={{ textDecoration: "underline" }}>
                            Description:
                          </div>
                          <i className="fa-solid fa-heart"></i> Your trusty
                          hollow companion!
                          <br />
                          <i className="fa-solid fa-battery-full"></i> High
                          battery capacity
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="card p-2" style={{ height: 340 + "px" }}>
                        <img
                          src="/src/assets/benbigger.webp"
                          className="card-img-top"
                          style={{
                            borderRadius: 100 + "%",
                            border: "solid",
                            borderColor: "lightblue",
                          }}
                        />
                        <div
                          className="card-footer bg-transparent border-success mt-4 p-0 pt-1"
                          style={{ fontSize: 14 + "px" }}
                        >
                          <i className="fa-solid fa-helmet-safety"></i> Ben
                          Bigger
                          <br />
                          <div style={{ textDecoration: "underline" }}>
                            Description:
                          </div>
                          <i className="fa-solid fa-shield"></i> High defense
                          and burst damage
                          <br />
                          <div style={{ textDecoration: "underline" }}>
                            Recommended W-engine:
                          </div>
                          <i className="fa-solid fa-droplet"></i> Embrace the
                          spring
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="col-7 p-0" style={{ marginTop: 12 + "px" }}>
                  <div className="card p-0" style={{ height: 100 + "%" }}>
                    <div className="card-header bg-transparent border-success">
                      <i className="fa-solid fa-chart-simple"></i> Some other
                      random chart
                    </div>
                    <div className="card-body d-flex justify-content-center p-0">
                      <div style={{ height: 100 + "%" }}>
                        <BarChart
                          xAxis={[
                            {
                              scaleType: "band",
                              data: ["Ellen", "Anby", "Soukaku"],
                            },
                          ]}
                          series={[
                            {
                              data: [85, 5, 55],
                              color: "lightblue",
                              label: "Ice dps",
                            },
                            {
                              data: [25, 45, 35],
                              color: "#ffc800",
                              label: "Physical dps",
                            },
                            {
                              data: [5, 55, 5],
                              color: "#0593ff",
                              label: "Electric dps",
                            },
                          ]}
                          width={300}
                          height={250}
                          slotProps={{
                            legend: { hidden: true },
                          }}
                          borderRadius={4}
                        />
                      </div>
                    </div>
                    <div className="card-footer bg-transparent border-success">
                      Some description about the chart
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
