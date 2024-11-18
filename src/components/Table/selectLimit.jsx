import React from 'react';

function SelectLimit(props) {
    return (
        <select onChange={(e) => props.onLimitChange(e.target.value)} class="select" >
        {/* <option selected>Open this select menu</option> */}
        <option value="5">5 / Trang</option>
        <option value="10">10 / Trang</option>
        <option value="20">20 / Trang</option>
</select>
    );
}

export default SelectLimit;