'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { School } from '@/types/school';

const College_view = () => {

    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const getSchool = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                await axios({
                    method: 'GET',
                    url: `${apiUrl}/api/add-college/`,
                }).then((res) => {
                    console.log(res.data);
                    return setSchools(res.data);
                }).catch((err) => {
                    console.log(`Erroe in fetching colleges: ${err}`);
                })
            }
            catch (err) {
                console.log(`There was a problem with the fetch operation of colleges: ${err}`);
            }
        }
        getSchool();
    }, [])

    return (
        <MDBTable>
            <MDBTableHead dark >
                <tr>
                    <th scope='col' style={{ paddingLeft: "6vw" }}>S.No</th>
                    <th scope='col' style={{ paddingLeft: "4vw" }}>Name</th>
                    <th scope='col' style={{ paddingLeft: "4vw" }}>city</th>
                    <th scope='col' style={{ paddingLeft: "2vw" }}>Contact</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                    schools.map((school : School, index) => (
                        <tr key={index}>
                            <th scope='row' style={{ paddingLeft: "6vw" }}>{school.id}</th>
                            <td style={{ paddingLeft: "4vw" }}>{school.Name}</td>
                            <td style={{ paddingLeft: "4vw" }}><p style={{maxWidth:"8ch",overflow:"scroll"}}>{school.Location}</p></td>
                            <td style={{ paddingLeft: "2vw" }}><p style={{ maxWidth: "8ch",overflow:"scroll" }}>{school.Contact} <br /> {school.Email}</p></td>

                        </tr>
                    )
                    )
                }

            </MDBTableBody>
        </MDBTable>

    );
}

export default College_view;