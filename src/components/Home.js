import React, { useState } from "react";
import { Form } from "./Form";
import styles from './Home.module.css';
import { Navbar } from "./Navbar";

function Home() {

    const [dataAirline, setDataAirline] = useState("");
    console.log("soy data desde app", dataAirline)

    return (
        <div className={styles.container}>
            <Navbar setDataAirline = {setDataAirline} />
            <Form dataAirline = {dataAirline} setDataAirline = {setDataAirline} />
        </div>
    )
}

export { Home };