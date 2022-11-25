import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserRecordTable from './Table';
export default function UserInputForm(props) {
    const [formData, setFormData] = useState();
    const [name, setName] = useState({
        name: '',
        email: '',
        age: ''
    });
    
    const getFormData = (e) => {
        e.preventDefault();
        if(e.target.name === 'name'){
            setName({
                name: e.target.value,
                email: ' ',
                age: ' '
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
    const submitHanle = (event, uesrRecord) => {
        event.preventDefault();
        setFormData({...name});
        setName({
            name: '',
            email: '',
            age: ''
        });
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
                        Add User
                    </Button>
                </Col>
            </Row>
        </Form>
        <UserRecordTable title={formData}/>
    </>
  )
}
