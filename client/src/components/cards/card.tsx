'use client'
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Minute } from "@/types/Minute";
import Image from "next/image";

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

    useEffect(() => {
        const loadMinutes = async () => {
            try {
                const result = await axios.get<Minute[]>('http://127.0.0.1:8000/api/');
                setMinutes(result.data);
            } catch (error) {
                console.error("Error loading minutes:", error);
            }
        };
        loadMinutes();
    }, [])


    const deleteMinute = async (id: number) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
            setMinutes(minutes.filter(minute => minute.id !== id));
        } catch (error) {
            console.error("Error deleting minute:", error);
        }
    };

    return (


        <div className="col row-cols-1 row-cols-md-3 g-4 p-5">
            {
                minutes.map((minute: Minute, index) => (
                    <div className="col mb-5" key={index}>
                        <div className="card h-100">
                            <Image src={minute.image} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{minute.title}</h5>
                                <p className="card-text">
                                    {minute.description}
                                </p>
                            </div>
                            <div className="card-body">
                                <Link href={`/update/${minute.id}`} passHref>
                                    <Button_edit whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="card-link">
                                        Edit
                                    </Button_edit>
                                </Link>
                                <Button_delete whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }} className="card-link  btn-danger" onClick={() => deleteMinute(minute.id)}>Delete</Button_delete>
                            </div>
                            <div className="card-footer mt-2">
                                <small className="text-muted">Date created -{minute.date}</small>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Card_main;