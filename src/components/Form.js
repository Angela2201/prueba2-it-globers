import React from "react";
import { useState } from "react";
import styles from './Form.module.css';

function Form({ dataAirline }) {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cellPhone,setCellPhone] = useState("");
    const [age,setAge] = useState("");

    const [inputs, setInputs] = useState ({
        nombre: '',
        correo: '',
        celular: '',
        edad: ''
    })

    const handleInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const saveData = (e) => {
        e.preventDefault();
        console.log(inputs.nombre)
    }


    console.log(dataAirline)

    return (
      <>
        <div className={styles.Text}>
          Hola, bienvenido, sabemos que quieres viajar en un {dataAirline}, por favor diligencia el siguiente
          formulario:
        </div>
        <form className={styles.Form} onSubmit={saveData}>
            <label htmlFor="nombre">Nombre Completo</label>
            <input
                type="text"
                id="name"
                name="nombre"
                /* value={name} */
                /* onChange={(e) => setName(e.target.value)} */
                autoComplete="off"
                onChange={handleInputChange}
            />
            <label htmlFor="correo">Correo</label>
            <input
                type="email"
                id="email"
                name="correo"
                value={email}
                /* onChange={(e) => setEmail(e.target.value)} */
                autoComplete="off"
                onChange={handleInputChange}
            />
            <label htmlFor="celular">Celular</label>
            <input
                type="number"
                id="number"
                name="celular"
                value={cellPhone}
                /* onChange={(e) => setCellPhone(e.target.value)} */
                autoComplete="off"
                onChange={handleInputChange}
            />
            <label htmlFor="edad">Edad</label>
            <input
                type="number"
                id="age"
                name="edad"
                value={age}
                /* onChange={(e) => setAge(e.target.value)} */
                autoComplete="off"
                onChange={handleInputChange}
            />
            <button type="submit" value="Enviar">
                Enviar
            </button>
        </form>
        </>
    );
}

export { Form };

    /* const callbackFunction = (e) => {
        e.preventDefault();
        const myFormData = new FormData(e.target);
        const formDataObj = {};
        myFormData.forEach((value, key) => (formDataObj[key] = value));
        console.log(myFormData);
    } */

    /* const onChangeName = (e) => {
        this.setInputs({ name: e.target.value })
    }

    const onChangeEmail = (e) => {
        this.setInputs({ email: e.target.value })
    }

    const onChangeCellPhone = (e) => {
        this.setInputs({ cellPhone: e.target.value })
    }

    const onChangeAge = (e) => {
        this.setInputs({ age: e.target.value })
    }

    const saveData = (e) => {
        e.preventDefault();
        this.setInputs({
            name: '',
            email: '',
            cellPhone: '',
            age: ''
        })
    } */
