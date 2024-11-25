import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker"; // Nhập DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Nhập CSS cho DatePicker
import { motion } from "framer-motion"; // Nhập framer-motion
import "./style_setting.css";

const Setting = () => {
    const [confirmClicked, setConfirmClicked] = useState(false);
    const [cancelClicked, setCancelClicked] = useState(false);
    const [startDate, setStartDate] = useState(new Date()); // Trạng thái cho ngày
    const [calendarOpen, setCalendarOpen] = useState(false); // Trạng thái cho việc mở lịch

    const handleConfirmClick = () => {
        setConfirmClicked(!confirmClicked);
        setCancelClicked(false); // Reset trạng thái nút hủy
    };

    const handleCancelClick = () => {
        setCancelClicked(!cancelClicked);
        setConfirmClicked(false); // Reset trạng thái nút xác nhận
    };

    return (
        <div className="board1 d-flex">
            <form>
                <div className="my-5 d-flex justify-content-between">
                    <h2 className="col-sm-2 control-label my-2">Ngày cấp token</h2>
                    <div className="input-group custom1 mb-4 d-flex justify-content-between">
                        <DatePicker
                            selected={startDate} 
                            onChange={(date) => {setStartDate(date);
                                setCalendarOpen(false); // Đóng calendar sau khi chọn
                            }} // Cập nhật ngày khi người dùng chọn
                            className="fc1 form-control-lg fs-2 rounded-3 border-black border-1"
                            dateFormat="dd/MM/yyyy" // Định dạng ngày
                            open={calendarOpen} // Điều khiển việc mở calendar
                            onClickOutside={() => setCalendarOpen(false)} // Đóng calendar khi nhấp ra ngoài
                            popperClassName="custom-calendar position-absolute"
                        />
                        <motion.div 
                            className="icon" 
                            onClick={() => setCalendarOpen(!calendarOpen)} // Mở/đóng calendar khi nhấp vào icon
                            whileTap={{ y: 2 }} // Di chuyển xuống khi nhấn
                        >
                            <AiOutlineCalendar />
                        </motion.div>
                    </div>
                </div>
                <div className="my-5 d-flex justify-content-between">
                    <h2 className="col-sm-2 control-label mt-3">Số token cấp</h2>
                    <div className="input-group custom2 mb-5 d-flex justify-content-between mt-1">
                        <input type="total-token" placeholder='' className="form-control form-control-lg fs-2 fw-bold rounded-3 border-black border-1"></input>
                    </div>
                </div>
                <div className="my-4 d-flex justify-content-between">
                    <h2 className="col-sm-2 mt-1 control-label">Định dạng file</h2>
                    <div className="form-check fs-3">
                        <input className="form-check-input" type="checkbox" value="" id="wordCheck" />
                        <label className="form-check-label" htmlFor="wordCheck">
                            Word(.doc)
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="wordCheck" />
                        <label className="form-check-label" htmlFor="wordCheck">
                            PDF(.pdf)
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="wordCheck" />
                        <label className="form-check-label" htmlFor="wordCheck">
                            Excel(.xml)
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="wordCheck" />
                        <label className="form-check-label" htmlFor="wordCheck">
                            Power Point(.ppt)
                        </label>
                        <input className="form-check-input" type="checkbox" value="" id="wordCheck" />
                        <label className="form-check-label" htmlFor="wordCheck">
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className={`btn custom-button1 mx-5 ${confirmClicked ? 'clicked' : ''}`} onClick={handleConfirmClick}>
                        Xác nhận</button>
                    <button className={`btn custom-button2 mx-5 ${cancelClicked ? 'clicked' : ''}`} onClick={handleCancelClick}>
                        Hủy</button>
                </div>
            </form>
        </div>
    )
};

export default Setting;

