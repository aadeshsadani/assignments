import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowRecord from './Table';
export default function UserInputForm(props) {
    
    const [name, setName] = useState([]);
    const submitHanle = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);
        let obj = {
            name: formData.get('name'),
            email: formData.get('email'),
            age: formData.get('age')
        };
        const found = name.find(email => {
            return email.email === obj.email;
          });
        
        if(found === undefined){
            setName([...name, obj]);
        }else{
            alert('Sorry this email '+obj.email+' is already taken.');
            return false;
        }

        document.getElementById('myForm').reset();
    }
  return (
    <>
        <Form onSubmit={submitHanle} id="myForm">
            <h1 className='mb-3 text-center border-bottom'>{props.title}</h1>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder='Enter name' required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor='email'>Email</Form.Label>
                        <Form.Control type="email" name='email' id='email' placeholder="Enter email" required />
                    </Form.Group>
                </Col>
            </Row>
  
            <Row>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='age'>Age</Form.Label>
                        <Form.Control type='number' name='age' id='age' placeholder='Enter age' required />
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
        <ShowRecord record={name}/>
    </>
  )
}