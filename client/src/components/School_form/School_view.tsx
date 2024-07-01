'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { School } from '@/types/school';

const School_view = () => {

    const [schools, setSchools] = useState<School[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getSchool = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const response = await axios.get(`${apiUrl}/api/get-schools/`);
                console.log(response.data);
                setSchools(response.data);
                alert("Schools Loaded Successfully");
            }
            catch (err) {
                console.log(`There was a problem with the fetch operation of schools: ${err}`);
                alert("Error in loading schools");
            } finally {
                console.log("Schools loaded");
                setLoading(false);
            }
        }
        getSchool();
    }, [])

    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <MDBTable>
            <MDBTableHead dark >
                <tr>
                    <th scope='col' style={{ paddingLeft: "4vw" }}>S.No</th>
                    <th scope='col' style={{ paddingLeft: "2vw" }}>Name</th>
                    <th scope='col' style={{ paddingLeft: "2vw" }}>city</th>
                    <th scope='col' style={{ paddingLeft: "2vw" }}>Contact</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                    schools.map((school: School, index) => (
                        <tr key={index}>
                            <th scope='row' style={{ paddingLeft: "4vw" }}>{school.id}</th>
                            <td style={{ paddingLeft: "2vw" }}>{school.name}</td>
                            <td style={{ paddingLeft: "2vw" }}><p style={{ maxWidth: "8ch", overflow: "scroll" }}>{school.location}</p></td>
                            <td style={{ paddingLeft: "2vw" }}><p style={{ maxWidth: "8ch", overflow: "scroll" }}>{school.contact} <br /> {school.email}</p></td>
                        </tr>
                    )
                    )
                }

            </MDBTableBody>
        </MDBTable>

    );
}

export default School_view;