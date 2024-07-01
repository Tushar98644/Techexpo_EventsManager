/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChangeEvent } from 'react';
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

    const [title, setTitle] = useState<string>(minute?.title);
    const [description, setDescription] = useState<string>(minute?.description);
    const [image, setImage] = useState<File | string | null>(minute?.image);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const updatedMinute = {  ...minute,title, description, image };
            const response = await axios.put(`${apiUrl}/api/minute/${minute.id}/`, updatedMinute, config);
            updateMinute(response.data);
            alert("Minute Updated Successfully");
        } catch (error) {
            console.error("Error updating minute:", error);
            alert("Error in updating minute");
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <>
            <Modal show={true} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Minute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={title} required onChange={(e) => setTitle(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={handleFileChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
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