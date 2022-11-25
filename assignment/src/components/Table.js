import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
// import PropTypes from 'prop-types';


export default function TableData(props) {
    const propsRecord = props.data;
  return (
        <Table>            
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
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
                        </tr>
                    )
                }
            </tbody>
        </Table>
        
  )
}
