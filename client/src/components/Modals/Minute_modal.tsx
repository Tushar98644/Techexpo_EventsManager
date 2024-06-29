/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ChangeEvent, useEffect } from 'react';
import {
    MDBInput,
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const Button_edit = styled(motion.button)`
    background-color: blue;
    border: none;
    color: white;
    border-radius: 80px;
    height:50px;
    width:130px;
    margin-left:5vw;
    `;

const Minute_modal = () => {
    
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);
    const { id } = useParams();

    const loadminutes = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
        console.log(data);
        setName(data.name);
        setDescription(data.description);
        setDate(data.date);
        setImage(data.image);
    }

    useEffect(() => {
        loadminutes();
    }, [loadminutes])


    const UpdateModal = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('date', date);
        if (image)
        formData.append('image', image);
        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formData,
        }).then((res) => {
            console.log(res.data);
            alert("Minute Updated Successfully");
            router.push('/');
        }).catch((err) => {
            console.log(err);
            alert("Enter the details correctly")
        })
    }

    const handleShow = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        const dummy = response.data;
        router.push(`/update/${dummy?.id}/`);
    };

    const handleClose = () => {
        setShow(false);
        router.push('/');
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setImage(e.target.files[0]);
        }
      };

    return (
        <>
            <Button_edit whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="card-link" onClick={handleShow}>Edit</Button_edit>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Minute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={name} required onChange={(e) => setName(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" value={date} onChange={(e) => setDate(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={handleFileChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={UpdateModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Minute_modal;