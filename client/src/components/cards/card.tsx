/* eslint-disable @next/next/no-img-element */
'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { Minute } from "@/types/Minute";
import Minute_modal from "../Modals/Minute_modal";

const Button_delete = styled(motion.button)`
    background-color: red;
    border: none;
    color: white;
    border-radius: 80px;
    height:50px;
    width:130px;
    margin-top: 20px;
    margin-left:50px;
`;

const Button_edit = styled(motion.button)`
background-color:blue;
border: none;
color: white;
border-radius: 80px;
height:50px;
width:130px;
margin-top: 20px;
margin-left:50px;
`;

const Card_main = () => {
    const [minutes, setMinutes] = useState<Minute[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedMinute, setSelectedMinute] = useState<Minute | null>(null);

    useEffect(() => {
        const loadMinutes = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const result = await axios.get<Minute[]>(`${apiUrl}/api/add-minute/`);
                setMinutes(result.data);
            } catch (error) {
                console.error("Error loading minutes:", error);
            }
        };
        loadMinutes();
    }, []);

    const deleteMinute = async (id: number) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.delete(`${apiUrl}/api/minutes/${id}/`);
            console.log(response.data);
            setMinutes(minutes.filter((minute) => minute.id !== id));
            alert("Minute Deleted Successfully");
        } catch (error) {
            console.error("Error deleting minute:", error);
            alert("Error in deleting minute");
        }
    };

    const openModal = (minute: Minute) => {
        setSelectedMinute(minute);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelectedMinute(null);
    };

    const updateMinute = (updatedMinute: Minute) => {
        setMinutes(minutes.map(minute => (minute.id === updatedMinute.id ? updatedMinute : minute)));
        closeModal();
    };

    return (
        <>
            {open && selectedMinute && (
                <Minute_modal
                    minute={selectedMinute}
                    closeModal={closeModal}
                    updateMinute={updateMinute}
                />
            )}
            <div className="col row-cols-1 row-cols-md-3 g-4 p-5">
                {minutes.map((minute: Minute, index) => (
                    <div className="col mb-5" key={index}>
                        <div className="card h-100">
                            <img src={minute.image} className="card-img-top" alt="image" width={500} height={500} />
                            <div className="card-body">
                                <h5 className="card-title">{minute.title}</h5>
                                <p className="card-text">
                                    {minute.description}
                                </p>
                            </div>
                            <div className="card-body">
                                <Button_edit
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.2 }}
                                    className="card-link"
                                    onClick={() => openModal(minute)}
                                >
                                    Edit
                                </Button_edit>
                                <Button_delete
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.2 }}
                                    className="card-link  btn-danger"
                                    onClick={() => deleteMinute(minute.id)}
                                >
                                    Delete
                                </Button_delete>
                            </div>
                            <div className="card-footer mt-2">
                                <small className="text-muted">Date created - {minute.date}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card_main;
