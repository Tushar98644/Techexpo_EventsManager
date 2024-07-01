'use client'
import React from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

const Button = styled(motion.button)`
    background-color:blue;
    border: none;
    color: white;
    padding: 15px 42px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.5vw 9.5vw 2vw;
    border-radius: 7vw;
    cursor: pointer;
`;

const School_form = () => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const AddSchool = async () => {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Location', location);
    formData.append('Contact', contact);
    formData.append('Email', email);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      await axios({
        method: 'POST',
        url: `${apiUrl}/api/add-school/`,
        data: formData,
      }).then((res) => {
        console.log(res.data);
        alert("School Added Successfully");
        window.location.reload();
      }).catch((err) => {
        console.log(err);
        alert("Enter the details correctly")
      })
    }
    catch (err) {
      console.log(`There was a problem with the fetch operation of schools: ${err}`);
    }

  }


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" width={500} height={500} />
        </MDBCol>
        <MDBCol col='4' md='4'>
          <MDBInput wrapperClass='mb-4 my-5' label='Name' id='formControlLg' type='text' value={name} onChange={(e) => setName(e.target.value)} size="lg" />
          <MDBInput wrapperClass='mb-4 my-2' label='Location' id='formControlLg' type='text' value={location} size="lg" onChange={(e) => setLocation(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='Contact' id='formControlLg' type='number' value={contact} maxLength={10} size="lg" onChange={(e) => setContact(e.target.value)} />
          <MDBInput wrapperClass='mb-4 my-2' label='Email(if any)' id='formControlLg' type='email' value={email} size="lg" onChange={(e) => setEmail(e.target.value)} />
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={AddSchool}>Add School</Button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default School_form;