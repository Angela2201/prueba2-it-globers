import React from "react";
import { useState, useEffect } from "react";
import styles from './Navbar.module.css';

function Navbar({ setDataAirline }) {

    const [ menu , setMenu ] = useState(false)

    const toggleMenu = () => {
        setMenu( !menu )
    }

    const useDatos = () => {
        const [airlines, setAirlines] = useState([])

        useEffect(() => {
            fetch("data/airlines.json")
            .then(response => response.json())
            .then(datos => {
                setAirlines(datos)
            })
        }, [])

        return airlines
    }

    const airlines = useDatos()

    const clickButton = (item) => {
        const aerolinea = (item.name)
        setDataAirline(aerolinea);
        console.log(aerolinea);
        console.log("Esta funcionando");
    }

    return (
        <header className={styles.Navbar}>
            <h1 className={styles.NavbarH1}>
                <a href="#" className={styles.NavbarA}>
                    TRAVEL
                </a>
            </h1>
            <button onClick={toggleMenu} className={styles.NavbarButton}>
                <svg className={styles.NavbarSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <nav className={`${styles.NabvarNav} ${menu ? styles.isActive : styles.isDisable}`}>
                <ul className={styles.NavbarUl} >
                {airlines.map((item, index) => (                    
                    <li key={index} className={styles.NabvarLi}><a onClick={() => clickButton(item)} href="#" className={styles.NavbarA}>{item.name}</a></li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export { Navbar };