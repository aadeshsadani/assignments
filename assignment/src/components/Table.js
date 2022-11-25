import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
// import PropTypes from 'prop-types';


export default function TableData(props) {
    const propsRecord = props.record;
    // const firstTimeCount = propsRecord.length === 0 ? 1 : propsRecord.length;
    // const [len, setLen] = useState(firstTimeCount);
    console.log(propsRecord.length);
    const [len, setLen] = useState(propsRecord.length);
    let inlen = propsRecord.length;
    useEffect(()=>{
        setLen(propsRecord.length);
        console.log('coming into effect');
    },[inlen]);
    //
    const removeValue = (id) => {
        propsRecord.splice(id, 1,);//first param hits on index and second param removes num of items
        const countArray = propsRecord.length;
        setLen(countArray);
        console.log('delete clicked');
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    propsRecord.map((record, index) =>
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{record.name}</td>
                            <td>{record.email}</td>
                            <td>{record.age}</td>
                            <td><Button variant="danger" onClick={() => removeValue(index)}>Delete</Button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>

    )
}
