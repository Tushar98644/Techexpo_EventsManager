'use client'
import axios from "axios";
import {
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from "@/components/Footer/Footer";

const Edit_Modal = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [date, setDate] = useState('');
    const [show, setShow] = useState(true);
    const router = useRouter();
    const { id } = useParams();

    const handleclose = () => {
        setShow(false);
        router.push('/');
    }

    useEffect(() => {
        const loadminutes = async () => {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
            console.log(data);
            setName(data.name);
            setDescription(data.description);
            setDate(data.date);
        }

        loadminutes();
    }, [id])

    const updateMinute = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('date', date);
        if (image)
            formData.append('image', image);
        try {
            await axios({
                method: 'PUT',
                url: `http://localhost:8000/api/minutes/${id}/`,
                data: formData,
            }).then((res) => {
                console.log(res.data);
                alert("Minute Updated Successfully");
                router.push('/');
            }).catch((err) => {
                console.log(err);
                alert("Enter the details correctly")
            });
        }
        catch (err) {
            console.log(`There was a problem while sending the response to the minute route: ${err}`);
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <>
            <Navbar />
            <Modal show={show} >
                <Modal.Header >
                    <Modal.Title>Update Minute</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MDBInput wrapperClass='mb-4 my-5' label='Title' id='formControlLg' type='text' size="lg" value={name} required onChange={(e) => setName(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Description' id='formControlLg' type='text' size="lg" value={description} required onChange={(e) => setDescription(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='Enter Date' id='formControlLg' type='date' size="lg" value={date} onChange={(e) => setDate(e.target.value)} />
                    <MDBInput wrapperClass='mb-4 my-2' label='click to upload image' id='formControlLg' type='file' size="lg" onChange={handleFileChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateMinute} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    );
}

export default Edit_Modal;