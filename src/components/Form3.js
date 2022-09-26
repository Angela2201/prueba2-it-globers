import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

const initialForm = {
    nombre: '',
    correo: '',
    celular: '',
    edad: ''
}

const Form3 = ({ dataAirline }) => {

   /*  const [form, setForm] = useState(initialForm); */
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cellPhone, setCellPhone] = useState("");
    const [age, setAge] = useState(0);

    const handleChange = (e) => {
        setData ({
            name: name,
            email: email,
            cellPhone: cellPhone,
            age: age
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        handleReset()
    }

    const handleReset = () => {
        setName("")
        setEmail("")
        setCellPhone("")
        setAge("")
        setData("")
        /* setForm(initialForm) */
    }

  return (
    <>
        <div className={styles.Text}>
          Hola, bienvenido, sabemos que quieres viajar en un {dataAirline}, por favor diligencia el siguiente
          formulario:
        </div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre Completo"
            autoComplete="off"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
        />
        <input
            type="text"
            id="email"
            name="email"
            placeholder="Correo"
            autoComplete="off"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
        />
        <input
            type="number"
            id="cellPhone"
            name="cellPhone"
            placeholder="Celular"
            autoComplete="off"
            onChange={(e) => {setCellPhone(e.target.value)}}
            value={cellPhone}
        />
        <input
            type="number"
            id="age"
            name="age"
            placeholder="Edad"
            autoComplete="off"
            onChange={(e) => {setAge(e.target.value)}}
            value={age}
        />
        <button 
            type="submit" 
            value="Enviar"
        >
            Enviar
        </button>
        </form>
    </>
  )
}

export { Form3 };