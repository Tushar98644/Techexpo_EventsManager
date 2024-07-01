/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChangeEvent, useEffect } from 'react';
import {
    MDBInput,
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Minute } from '@/types/Minute';

interface Props {
    minute: Minute;
    closeModal: () => void;
    updateMinute: (minute: Minute) => void;
}

const Minute_modal = ({ minute, closeModal, updateMinute } : Props) => {

    const router = useRouter();
    const [title, setTitle] = useState<string>(minute?.title);
    const [description, setDescription] = useState<string>(minute?.description);
    const [image, setImage] = useState<File | null>(null);
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const updatedMinute = { ...minute, title, description, image };
            const response = await axios.put(`${apiUrl}/api/minutes/${minute.id}/`, updatedMinute);
            updateMinute(response.data);
        } catch (error) {
            console.error("Error updating minute:", error);
        }
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
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Minute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={title} required onChange={(e) => setTitle(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" value={date} onChange={(e) => setDate(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={handleFileChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Minute_modal;