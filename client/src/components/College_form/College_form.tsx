'use client'
import React from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';
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
    margin: 0.5vw 12.5vw 2vw;
    border-radius: 7vw;
    cursor: pointer;
`;

const College_form = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');

    const AddCollege = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('contact', contact);
        formData.append('email', email);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(`${apiUrl}/api/add-college/`, formData, config);
            console.log(response.data); 
            alert("College Added Successfully");
            window.location.reload();
        }
        catch (err) {
            console.log(`There was a problem with the post operation of colleges: ${err}`);
        }
    }



    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6' >
                        <MDBCardBody className='d-flex flex-column my-5'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0" style={{ marginLeft: "7vw" }}>Add College Details</span>
                            </div>
                            <MDBCol col='6' md='16' style={{ marginLeft: "3vw" }}>
                                <MDBInput wrapperClass='mb-4 my-5' label='Name' id='formControlLg' type='text' size="lg" value={name} onChange={(e) => setName(e.target.value)} />
                                <MDBInput wrapperClass='mb-4 my-5' label='Location' id='formControlLg' type='text' size="lg" value={location} onChange={(e) => setLocation(e.target.value)} />
                                <MDBInput wrapperClass='mb-4 my-5' label='Contact' id='formControlLg' type='number' size="lg" value={contact} onChange={(e) => setContact(e.target.value)} />
                                <MDBInput wrapperClass='mb-4 my-2' label='Email(if any)' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={AddCollege}>Add College</Button>
                            </MDBCol>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default College_form;
