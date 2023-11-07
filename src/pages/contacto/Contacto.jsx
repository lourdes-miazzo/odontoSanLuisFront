import "./contacto.css"
import React, { useState }  from "react"
import Footer from "../../components/footer/Footer"
import {contactRequest} from "../../api/auth.js"
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import RegisterZone from "../../components/registerZone/RegisterZone"
import Swal from "sweetalert2"

const Contacto= ()=>{
    const [contactSent, setContactSend]= useState(false)
    const [contactErrors, setContactErrors]= ("")
    const navigate = useNavigate();
    const { register, handleSubmit, formState: errors, reset } = useForm();
    const onSubmit= handleSubmit(async (values)=> {
            try{
                const res= await contactRequest(values)
                setContactSend(true)
                reset()
            }
            catch(e){
                setContactErrors(e.response.data.message)
            }  
        })
    
    const handleContactAlert=()=>{
        Swal.fire({
            icon: 'success',
            title: 'Tu mensaje fue enviado correctamente, pronto recibirás una respuesta!',
            showConfirmButton: true,
        });
        navigate("/");
    }
    return(
        <>
        <div className="backColor">
            <div className="backOrg">
                {
                    contactSent
                    ?
                    (handleContactAlert())
                    :
                    (<>   
                    {contactErrors && <div className="errors">{contactErrors}</div>}
                    <h3 className="titleContact">Contactate con nosotros</h3>
                    <form className="formOrg" onSubmit= {onSubmit}>
                        <label htmlFor="NombreyApellido">Ingresa tu nombre y apellido</label>
                        <input type="text" {...register("NombreyApellido", {required: true})} name="NombreyApellido" id="NombreyApellido"/>
                        {errors.NombreyApellido && <p className="errors">El Nombre y Apellido son obligatorios</p>}
                        <label htmlFor="email">Ingresa tu email</label>
                        <input type="email" {...register("email", {required: true})} name="email" id="email"/>
                        {errors.email && <p className="errors">El email es obligatorio</p>}
                        <label htmlFor="mensaje">Dejanos tu mensaje</label>
                        <input type="text" {...register("mensaje", {required: true})} name="mensaje" id="mensaje"/>
                        {errors.mensaje && <p className="errors">El mensaje es obligatorio</p>}
                        <button className="my-button" type="submit">Enviar mensaje</button>
                    </form></>)
                }

            </div>
            <div className="locationRegist">
                <RegisterZone />
            </div>
        </div>
            <Footer/> 
        </>
    )
}

export default Contacto