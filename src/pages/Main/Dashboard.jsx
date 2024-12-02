import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/UserauthContext";
import PrintingContext from "../../context/PrintingContext";
import { useNavigate } from "react-router-dom";

// Import graphic tags
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Carousel from "react-bootstrap/Carousel";
import { ReactTyped } from "react-typed";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import Col from "react-bootstrap/esm/Col";

// Import dashboard page styles
import "../../pagestyles/dashboard.css";

// Pie graph settings
const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["green", "red", "darkcyan", "lightblue"];

const Dashboard = () => {
  const navigate = useNavigate();

  // Get functions + variables from contexts
  let { userinfo } = useContext(AuthContext);
  let { dashboard, getDashboard } = useContext(PrintingContext);

  // Dashboard info
  useEffect(() => {}, [dashboard]);
  useEffect(() => {
    getDashboard();
  }, []);

  // Set pie chart
  const data = [
    {
      label: "Máy in đang hoạt động",
      value: dashboard.printer ? dashboard.printer.active : 0,
    },
    {
      label: "Máy in đang bảo trì",
      value: dashboard.printer ? dashboard.printer.maintenance : 0,
    },
  ];

  // Set progression
  const monthData = dashboard.history ? dashboard.history.map(item => item.time) : [];

  const tokenData = dashboard.history ? dashboard.history.map(item => item.token) : [];

  // Handle file drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    // TEST
    // console.log(file);

    if (file) {
      // Navigate to preview page with file info
      navigate("/print", {
        state: {
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
        },
      });
    }
  };

  return (
    <div className="dashboard_wrapper">
      {(userinfo ? userinfo.is_SPSO : null) ? (
        <Row className="dashboard-wrapper">
          <Col xs={4}>
            <Row>
              <div className="side-card-wrapper">
                <div className="side-card-background">
                  <Row>
                    <Col className="p-3 ms-3" xs={5}>
                      <PieChart
                        colors={palette}
                        series={[
                          {
                            data: data,
                            innerRadius: 25,
                            paddingAngle: 0,
                            cornerRadius: 5,
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
                    </Col>
                    <Col className="pt-1">
                      <div className="printer-text-wrapper-dashboard">
                        <div className="printer-detail-wrapper">
                          <div className="printer-detail-text-dashboard">
                            Máy in đang hoạt động
                          </div>
                          <div className="printer-count-dashboard-active">
                            {dashboard.printer ? dashboard.printer.active : 0}
                          </div>
                        </div>
                      </div>
                      <div className="printer-detail-wrapper">
                        <div className="printer-detail-text-dashboard">
                          Máy in đang bảo trì
                        </div>
                        <div className="printer-count-dashboard-maint">
                          {dashboard.printer
                            ? dashboard.printer.maintenance
                            : 0}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
            <Row>
              <div className="side-card-wrapper">
                <div className="side-card-background">
                  <div className="side-card-header">
                    Tổng số lượt in trong 30 ngày qua
                  </div>
                  <hr className="side-card-line"></hr>
                  <div className="side-card-counter">
                    {dashboard ? dashboard.prints : 0}{" "}
                    <i className="fa-solid fa-circle-up"></i>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className="side-card-wrapper">
                <div className="side-card-background">
                  <div className="side-card-header">
                    Tổng số token trong 30 ngày qua
                  </div>
                  <hr className="side-card-line"></hr>
                  <div className="side-card-counter">
                    {dashboard ? dashboard.tokens : 0}{" "}
                    <i className="fa-solid fa-coins"></i>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col xs={8} className="p-0">
            <div className="main-card-wrapper">
              <div className="main-card-background">
                <div className="main-card-header">
                  Tổng số token trong 6 tháng qua
                </div>
                <div style={{ height: 100 + "%" }}>
                  <BarChart
                    xAxis={[
                      {
                        scaleType: "band",
                        data: monthData,
                      },
                    ]}
                    series={[
                      {
                        data: tokenData,
                        color: "#0593ff",
                        label: "Token",
                      },
                    ]}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                    borderRadius={4}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="print_wrapper">
          <div className="fileupload_wrapper">
            <div
              className="fileupload_section"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="fileupload_text">
                Kéo thả file hoặc chọn tệp
                <br></br>
                <i className="fa-regular fa-file"></i>
              </div>
            </div>
          </div>
          <div className="fileupload_price_info_section">
            GIÁ IN
            <br></br>
            A4: 1 TOKEN / 1 TỜ
            <br></br>
            A3: 2 TOKEN / 1 TỜ
            <br></br>
            A2: 4 TOKEN / 1 TỜ
            <br></br>
            <br></br>
            <div className="fileupload_notice_info_section">
              Lưu ý:
              <br></br>
              Khi xảy ra lỗi trong quá trình in xin vui lòng lưu lại ảnh và báo
              cáo với hệ thống để được xử lý
              <br></br>
              <br></br>
              Hãy kiểm tra kỹ file, thông tin máy in và các lựa chọn khi in
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
