import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import styles from "./ShowUser.module.css";

const ShowUsers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://backend-skinstore-1.onrender.com/users").then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }, []);

    return (
        <div>
            <section>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th style={{ color: "red", fontFamily: "cursive", fontSize: "18px" }} className={styles.username} scope='col'>Name</th>
                            <th style={{ color: "red", fontFamily: "cursive", fontSize: "18px" }} scope='col'>Role</th>
                            <th style={{ color: "red", fontFamily: "cursive", fontSize: "18px" }} scope='col'>Email</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {data.map((el, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'table-primary' : ''}>
                                <th className={styles.username} scope='row'>{el.userName}</th>
                                <td>{el.role}</td>
                                <td>{el.email}</td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </section>
        </div>
    );
}

export default ShowUsers;
