import React, { useState } from 'react';
import '../../pagestyles/Option.css';
import { Button } from 'react-bootstrap';
const Option = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [isOption, setisOption] = useState(false)
    return (
        <div className='dialog'>
            <div className='PrintContent'>
                <div className='frame1'></div>
                <div className='frame2'></div>
                <div className='scrollbar'></div>
            </div>
            <div className='Option'>
                <div className='defaultoption'>
                    <div>
                        <span>Print Option</span>
                    </div>
                    {/* Body */}
                    <div className='alloption'>
                        <div className='printer'>
                            <span>Máy in</span>
                            <select>
                                    <option value="printer1">Máy 1</option>
                                    <option value="printer2">Máy 2</option>
                                    <option value="printer3">Máy 3</option>
                            </select>
                        </div>
                        <div className='numpage'>
                            <span>Trang</span>
                            <div>
                            <select onChange={(e) => e.target.value === "Option" ? setisOption(true) : setisOption(false)}>
                                    <option value="All">Tất cả</option>
                                    <option value="Option">Tùy chỉnh</option>
                            </select>
                            
                            {isOption && (<div className='inputnumpage'>
                                <input />
                                </div>)}

                            </div>
                        </div>
                        <div className='numobject'>
                            <span>Số bản</span>
                            <input />
                        </div>
                        <div className='pagedirection'>
                            <span>Hướng trang</span>
                            <select>
                                <option value="Direction1">Hướng trang 1</option>
                                <option value="Direction2">Hướng trang 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='moreoption' >
                    <div onClick={() => { setShowDropdown(!showDropdown); console.log("click") }}>
                        <span>More Setting</span>
                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>

                    {/* Dropdown Body */}

                    {showDropdown && (
                        <div className="dropdown">
                            <div className="moreoption-size-select">
                                <span>Kích cỡ: </span>
                                <select>
                                    <option value="A2">A2</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                </select>
                            </div>
                            <div className="moreoption-pages-select">
                                <span>Số Trang: </span>
                                <input />
                            </div>
                            <div className="moreoption-padding-select">
                                <span>Lề: </span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="moreoption-ratio-select">
                                <span>Tỉ lệ: </span>
                                <select>
                                    <option value="169">16:9</option>
                                    <option value="916">9:16</option>
                                    <option value="32">3:2</option>
                                </select>
                            </div>
                            <div className="moreoption-custom-attribute">
                                <span>Lựa chọn: </span>
                                <div>
                                    <label className="container">
                                        <span>
                                            Đầu trang và chân trang
                                        </span>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="container">
                                        <span>
                                            Đồ họa nền
                                        </span>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className='button_and_fee'>
                    <h4>Phí : 100</h4>
                    <div className='button'>
                        <div className='print'>
                            <Button size="lg" className='print-btn'> In </Button>
                        </div>
                        <div className='cancel'>
                            <Button size="lg" className='cancel-btn'> Hủy </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Option;