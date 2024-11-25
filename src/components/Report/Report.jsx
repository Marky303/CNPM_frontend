import React, {useState, useEffect, useRef} from "react";
import "./style_report.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { TbCoin } from "react-icons/tb";
import { CiFolderOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from "framer-motion"; // Nhập framer-motion
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';


const Report = () => {
    const data = [
        {name: 'q1', Content1: -35, Content2: -25, Content3: -35, Content4: -25, Content5: -35, Content6: -25, Content7: -35, Content8: -25, Content9: -35, Content10: -25},
        {name: 'q2', Content1: -35, Content2: -25, Content3: -35, Content4: -25, Content5: -35, Content6: -25, Content7: -35, Content8: -25, Content9: -35, Content10: -25},
        {name: 'q3', Content1: -35, Content2: -25, Content3: -35, Content4: -25, Content5: -35, Content6: -25, Content7: -35, Content8: -25, Content9: -35, Content10: -25},
        {name: 'q4', Content1: -35, Content2: -25, Content3: -35, Content4: -25, Content5: -35, Content6: -25, Content7: -35, Content8: -25, Content9: -35, Content10: -25},
    ];

    const [confirmClicked, setConfirmClicked] = useState(false);
    const [cancelClicked, setCancelClicked] = useState(false);

    const handleConfirmClick = () => {
        setConfirmClicked(!confirmClicked);
        setCancelClicked(false); // Reset cancel button state
    };

    const handleCancelClick = () => {
        setCancelClicked(!cancelClicked);
        setConfirmClicked(false); // Reset confirm button state
    };

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null); 

    const handleChange = (date) => {
        if (!startDate || (startDate && endDate)) {
            setStartDate(date);
            setEndDate(null);
        } else {
            setEndDate(date);
            setIsOpen(false); 
        }
    };

    const handleClickOutside = (event) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target)) {
            setIsOpen(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (eventKey) => {
        setSelectedOption(eventKey);
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="border1 m-5 p-5">
                    <div className="detail d-flex justify-content-center align-items-center">
                        <FiPrinter className="icon3"/>
                    </div>
                    <h2 className="d-flex justify-content-center">200</h2>
                    <div className="content1 d-flex justify-content-center">Tổng số máy in</div>
                </div>
                <div className="border1 m-5 p-5">
                    <div className="detail d-flex justify-content-center align-items-center">
                        <RiUserLine className="icon3"/>
                    </div>
                    <h2 className="d-flex justify-content-center">5.000</h2>
                    <div className="content2 d-flex justify-content-center">Tổng số người dùng</div>
                </div>
                <div className="border1 m-5 p-5">
                    <div className="detail d-flex justify-content-center align-items-center">
                        <TbCoin className="icon3"/>
                    </div>
                    <h2 className="d-flex justify-content-center">2.000.000</h2>
                    <div className="content3 d-flex justify-content-center">Tổng số token</div>
                </div>
                <div className="border1 m-5 p-5">
                    <div className="detail d-flex justify-content-center align-items-center">
                        <CiFolderOn className="icon3"/>
                    </div>
                    <h2 className="d-flex justify-content-center">10.000</h2>
                    <div className="content4 d-flex justify-content-center">Tổng số file</div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="border2 m-4 p-5">
                    <div className="d-flex justify-content-center">
                        <p className="chart1 d-flex justify-content-center">CHART TITLE</p>
                        <p className="chart2 d-flex justify-content-center">This Week</p>
                        <RiArrowDropDownLine className="iconchart d-flex justify-content-center"/>
                    </div>
                    <p className="chart3 d-flex justify-content-center">5.000,00</p>
                    <p className="chart4 d-flex justify-content-center">50 Others</p>
                    <div className="barchart d-flex justify-content-center">
                        <BarChart width={770} height={240} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Content1" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Content2" stackId="a" fill="#82ca9d" />
                            <Bar dataKey="Content3" stackId="b" fill="#8884d8" />
                            <Bar dataKey="Content4" stackId="b" fill="#82ca9d" />
                            <Bar dataKey="Content5" stackId="c" fill="#8884d8" />
                            <Bar dataKey="Content6" stackId="c" fill="#82ca9d" />
                            <Bar dataKey="Content7" stackId="d" fill="#8884d8" />
                            <Bar dataKey="Content8" stackId="d" fill="#82ca9d" />
                            <Bar dataKey="Content9" stackId="e" fill="#8884d8" />
                            <Bar dataKey="Content10" stackId="e" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
                <div className="border3 m-4 p-5">
                    <div className="input-group input1 my-4 d-flex justify-content-between">
                        <motion.div className="icon1" onClick={() => setIsOpen(!isOpen)} whileTap={{ y: 2 }}>
                            <AiOutlineCalendar />
                        </motion.div>
                        <input
                        type="text"
                        value={startDate && endDate ? `${moment(startDate).format('DD/MM/YYYY')} - ${moment(endDate).format('DD/MM/YYYY')}` : ''}
                        className="fc2 input11 form-control-md fs-2 rounded-3 border-1"
                        readOnly
                        placeholder=""
                        />
                        {isOpen && (
                            <div className="position-absolute" ref={calendarRef} style={{ top: '40%', left: '50%', zIndex: 1050 }}>
                                <DatePicker
                                    selected={startDate || endDate}
                                    onChange={handleChange}
                                    selectsStart={startDate !== null && endDate === null}
                                    selectsEnd={endDate !== null}
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="dd/MM/yyyy"
                                    onClickOutside={() => setCalendarOpen(false)}
                                    inline 
                                />
                            </div>
                        )}
                    </div>
                    <div className="input-group input1 d-flex justify-content-between my-5">
                        <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle className="dropdown11 d-flex justify-content-between rounded-3 border-1" variant="primary" id="dropdown-basic">
                                {selectedOption || 'Cơ Sở'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="key11">
                                <Dropdown.Item className="key22" eventKey="Cơ sở 1">Cơ sở 1</Dropdown.Item>
                                <Dropdown.Item className="key22" eventKey="Cơ sở 2">Cơ sở 2</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className="input-group input1 d-flex justify-content-between my-5">
                        <p className="icon2">Tòa</p>
                        <input type="base" placeholder='' className="fc3 input11 form-control-md fs-2 rounded-3 border-1"></input>
                    </div>
                    <div className="input-group input1 d-flex justify-content-between my-5">
                        <p className="icon2">Máy in</p>
                        <input type="printer" placeholder='' className="fc3 input11 form-control-md fs-2 rounded-3 border-1"></input>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className={`btn custom-button01 mx-5 ${confirmClicked ? 'clicked' : ''}`} onClick={handleConfirmClick}>
                            Xác nhận</button>
                        <button className={`btn custom-button02 mx-5 ${cancelClicked ? 'clicked' : ''}`} onClick={handleCancelClick}>
                            Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Report
