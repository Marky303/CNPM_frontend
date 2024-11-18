import React from 'react';
import '../../components/Table/table.css';

function Table(props) {
    return (
        
            <table  className="table text-center">
            <thead>
                <tr>
                    <th className="p-3">Tên máy in</th>
                    <th className="p-3">Thời gian</th>
                    <th className="p-3">Tên file</th>
                    <th className="p-3">Phí</th>
                    <th className="p-3">Chi tiết</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.fullMobileNo}</td>
                    <td>{user.email}</td>
                    <td>{user.signupDate}</td>
                </tr>
                ))}
            </tbody>
            </table>
    );
}

export default Table;