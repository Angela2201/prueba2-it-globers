import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from './Form.module.css';

function Form({ dataAirline, setDataAirline }) {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const onSubmit = data => {
        console.log(data)
        reset()
        showAlert()
        setDataAirline("")
    };

    const showAlert = () => {
        Swal.fire({
            title: 'Exito',
            text: 'Tu información fue enviada con éxito, estaremos en contacto contigo',
            icon: 'success',
            timer:'5000'
        })
    }

    
    return(
        <>
        <div className={styles.Text}>
          Hola, bienvenido, sabemos que quieres viajar en un {dataAirline}, por favor diligencia el siguiente
          formulario:
        </div>
        <form id="form" onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
            <input 
                {...register("name", { required: true, maxLength: 20 })} 
                aria-invalid={errors.name ? "true" : "false"} placeholder="Nombre Completo" autoComplete="off"
            />
            {errors.name?.type === 'required' && <p role="alert">❌ El nombre es requerido</p>}
            {errors.name?.type === 'maxLength' && <p role="alert">❌ El campo del nombre debe tener menos de 20 caracteres</p>}

            <input 
                {...register("mail", { required: true, pattern: /\S+@\S+\.\S+/ })}
                aria-invalid={errors.mail ? "true" : "false"} placeholder="Correo" autoComplete="off"
            />
            {errors.mail?.type === 'required' && <p role="alert">❌ El correo es requerido</p>}
            {errors.mail?.type === 'pattern' && <p role="alert">❌ El formato del correo es incorrecto</p>}

            <input 
                {...register("cellphone", { required: true, minLength: 10 })}
                aria-invalid={errors.cellphone ? "true" : "false"} placeholder="Celular" autoComplete="off"
            />
            {errors.cellphone?.type === 'required' && <p role="alert">❌ El celular es requerido</p>}
            {errors.cellphone?.type === 'minLength' && <p role="alert">❌ El campo del celular debe tener 10 digitos</p>}

            <input 
                {...register("age", { required: true, valueAsNumber: true, min: 18, max: 100 })} 
                aria-invalid={errors.age ? "true" : "false"} placeholder="Edad" autoComplete="off"
            />
            {errors.age?.type === 'required' && <p role="alert">❌ La edad es requerida</p>}
            {errors.age?.type === 'min' && <p role="alert">❌ Debes ser mayor de edad</p>}

            <input type="submit" value="Enviar"/>
        </form>
        </>
    )
}

export { Form };