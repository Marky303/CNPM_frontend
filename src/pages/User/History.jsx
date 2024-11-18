import React, { useState } from 'react';
import Table from '../../components/Table/table';

import { getUsers,getLength } from '../../api/users';
import Pagination from '../../components/Table/pagination';
import { Container, FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import SelectLimit from '../../components/Table/selectLimit';
import '../../pagestyles/History.css'
import SearchTime from '../../components/Table/searchTime';

const History = () => {
    const[page,setPage] = useState(1);
    const[limit,setLimit] = useState(5);

    let totalPage = Math.ceil(getLength()/limit) ;
    let pageNo;
        if(page <= totalPage){
            pageNo = page;
        }else{
            setPage(totalPage);
            pageNo = page;
        }
    function handlePageChange(value){
        if(value === "&laquo;"|| value ==="... "){
            setPage(1);
        } else if (value === "&lsaquo;") {
            if(page !==1){
                setPage(page - 1);
            }
        } else if (value === "&rsaquo;"){
            if(page !== totalPage){
                setPage(page + 1);
            }
        } else if (value === "&raquo;" || value===" ..."){
            setPage(totalPage);
        } else {
            setPage(value);
        }
    }
    return (
        <div className='border_of_table'>
            
                
        <div className='Form_and_search'>
            <SearchTime />
            <Form>
                    <InputGroup className='my-3'>
                    <FormControl placeholder='Tìm kiếm'></FormControl>
                    </InputGroup>
            </Form>
            
            </div>
            <Table users = {getUsers(page,limit)}/>
            <div className='pagination-container'>
                
            <Pagination 
            totalPage={totalPage} page={pageNo} limit={limit} siblings ={1} 
            onPageChange ={handlePageChange}/>
            <SelectLimit onLimitChange={setLimit} />
            </div>
        </div>
    );
};

export default History;