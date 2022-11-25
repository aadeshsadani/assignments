
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
// import PropTypes from 'prop-types';

export default function UserRecordTable(props) {
    // const userData = props.title;
    console.log(props.title);
    return (
        <Table className='mt-5' striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Aadesh</td>
                    <td>aadeshkumar0333@gmail.com</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Aadesh</td>
                    <td>aadeshkumar0333@gmail.com</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Aadesh</td>
                    <td>aadeshkumar0333@gmail.com</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Aadesh</td>
                    <td>aadeshkumar0333@gmail.com</td>
                    <td>24</td>
                </tr>
            </tbody>
        </Table>
    );
  }
// Table.propTypes = {
//     title: PropTypes.string.isRequired
// }
// Table.defaultProps={
//     title : 'empty'
// }