/* eslint-disable @next/next/no-img-element */
'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { Minute } from "@/types/Minute";
import Minute_modal from "../Modals/Minute_modal";

const Card_main = () => {
    const [minutes, setMinutes] = useState<Minute[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedMinute, setSelectedMinute] = useState<Minute | null>(null);

    useEffect(() => {
        const loadMinutes = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const result = await axios.get<Minute[]>(`${apiUrl}/api/get-minutes/`);
                console.log(result.data);
                setMinutes(result.data);
            } catch (error) {
                console.error("Error loading minutes:", error);
                alert("Error in loading minutes");
            }
        };
        loadMinutes();
    }, []);

    const deleteMinute = async (id: number) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const response = await axios.delete(`${apiUrl}/api/minute/${id}/`);
            console.log(response.data);
            setMinutes(minutes.filter((minute) => minute.id !== id));
            alert("Minute Deleted Successfully");
        } catch (error) {
            console.error("Error deleting minute:", error);
            alert("Error in deleting minute");
        }
    };

    const openModal = (minute: Minute) => {
        console.log("open modal");
        setSelectedMinute(minute);
        setOpen(true);
    };

    const closeModal = () => {
        console.log("close modal");
        setOpen(false);
        setSelectedMinute(null);
    };

    const updateMinute = (updatedMinute: Minute) => {
        setMinutes(minutes.map(minute => (minute.id === updatedMinute.id ? updatedMinute : minute)));
        closeModal();
    };

    return (
        <div>
            {open && selectedMinute && (
                <div className="h-screen w-screen flex flex-col justify-center items-center">
                    <Minute_modal
                    minute={selectedMinute}
                    closeModal={closeModal}
                    updateMinute={updateMinute} />

                    <div>
                        <h1>Minutes</h1>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-3 gap-12 p-20">
                {minutes.map((minute: Minute, index) => (
                    <div className="col mb-5" key={index}>
                        <div className="card">
                            <img src={minute.image} className="card-img-top h-100 w-40 p-3" alt="image" width={300} height={300} />
                            <div className="card-body">
                                <h5 className="card-title">{minute.title}</h5>
                                <p className="card-text">
                                    {minute.description}
                                </p>
                            </div>
                            <div className="buttons flex flex-row gap-8 justify-center items-center">
                                <motion.button
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="card-link bg-blue-600 px-14 py-3 rounded-full text-white shadow-black shadow-lg"
                                    onClick={() => openModal(minute)}
                                >
                                    Edit
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="card-link bg-red-600 px-12 py-3 rounded-full text-white shadow-black shadow-lg"
                                    onClick={() => deleteMinute(minute.id)}
                                >
                                    Delete
                                </motion.button>
                            </div>
                            <div className="card-footer mt-4">
                                <small className="text-muted">Date created - {minute.date}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card_main;
