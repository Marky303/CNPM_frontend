import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/UserauthContext";
import { useNavigate } from "react-router-dom";

// Import dashboard page styles
import "../../pagestyles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // Get functions + variables from contexts
  let { accessToken, userinfo } = useContext(AuthContext);

  // Handle file drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    // TEST
    console.log(file);

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
        <div> This is the dashboard page</div>
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
