import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowRecord from './Table';
export default function UserInputForm(props) {
    
    const [name, setName] = useState({
        name: '',
        email: '',
        age: ''
    });
    const [data, setData] = useState([]);
    // const [len, setLen] = useState(data.length);
    const getFormData = (e) => {
        e.preventDefault();
        if(e.target.name === 'name'){
            setName({
                name: e.target.value,
                email: name.email !== ' ' ? name.email : ' ',
                age: name.age !== ' ' ? name.age : ' '
            });
        }else if(e.target.name === 'email'){
            setName({
                name: name.name,
                email: e.target.value,
                age: name.age !== ' ' ? name.age : ' '
            });
        }else if(e.target.name === 'age'){
            setName({
                name: name.name,
                email: name.email,
                age: e.target.value
            });
        }
    }
    const submitHanle = (event) => {
        event.preventDefault();
        setData([...data,name])
        // setLen(data.length);
        setName({
            name: '',
            email: '',
            age: ''
        });
        // console.log(name);
    }
  return (
    <>
        <Form onSubmit={submitHanle}>
            <h1 className='mb-3 text-center border-bottom'>{props.title}</h1>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder='Enter name' required onChange={getFormData} value={name.name} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control type="email" name='email' id='email' placeholder="Enter email" required onChange={getFormData} value={name.email} />
                    </Form.Group>
                </Col>
            </Row>
  
            <Row>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='age'>Age</Form.Label>
                        <Form.Control type='number' name='age' id='age' placeholder='Enter age' required onChange={getFormData} value={name.age} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end'>
                    <Button variant="success" type="submit">
                    {/* <Button variant="success" onClick={submitHanle}> */}
                        Add User
                    </Button>
                </Col>
            </Row>
        </Form>
        <ShowRecord record={data}/>
    </>
  )
}
