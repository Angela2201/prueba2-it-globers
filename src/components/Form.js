import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

function Form() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cellPhone,setCellPhone] = useState("");
    const [age,setAge] = useState("");

    return (
        <>
            <div className={styles.Text}>
                Hola, bienvenido, sabemos que quieres viajar en un X (Donde X=Nombre del item del menú seleccionado), por favor diligencia el siguiente formulario:
            </div>
            <form className={styles.Form}>
                <label htmlFor="nombre">Nombre Completo</label>
                <input 
                    type="text" 
                    id="name" 
                    name="nombre"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label htmlFor="correo">Correo</label>
                <input 
                    type="email" 
                    id="email" 
                    name="correo"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="celular">Celular</label>
                <input 
                    type="number" 
                    id="number" 
                    name="celular"
                    value={cellPhone}
                    onChange={(e)=>setCellPhone(e.target.value)}
                />
                <label htmlFor="edad">Edad</label>
                <input 
                    type="number" 
                    id="age" 
                    name="edad"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
        </>

    );
}

export { Form };