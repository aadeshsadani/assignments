import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/Form';
import MainNavbar from './components/Navbar';
// import TableData from './components/Table';
export default function App() {
  return (
    <>
      <MainNavbar />
      <div className="container mt-3 border pt-0 p-5 rounded">
        <UserForm  title='User Form' />
      </div>
    </> 
    )
  }

