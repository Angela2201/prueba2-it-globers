import React from "react";
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

    console.log(dataAirline)

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
            {errors.name?.type === 'required' && <p role="alert">El nombre es requerido</p>}

            <input 
                {...register("mail", { required: "El correo es requerido" })} 
                aria-invalid={errors.mail ? "true" : "false"} placeholder="Correo" autoComplete="off"
            />
            {errors.mail?.type === 'required' && <p role="alert">{errors.mail?.message}</p>}

            <input 
                {...register("cellphone", { required: true, valueAsNumber: true, maxLength: 10 })}
                aria-invalid={errors.cellphone ? "true" : "false"} placeholder="Celular" autoComplete="off"
            />
            {errors.cellphone?.type === 'required' && <p role="alert">El celular es requerido</p>}

            <input 
                {...register("age", { required: true, valueAsNumber: true, min: 18, max: 100 })} 
                aria-invalid={errors.age ? "true" : "false"} placeholder="Edad" autoComplete="off"
            />
            {errors.age?.type === 'required' && <p role="alert">La edad es requerida</p>}

            <input type="submit" value="Enviar"/>
        </form>
        </>
    )
}

export { Form };