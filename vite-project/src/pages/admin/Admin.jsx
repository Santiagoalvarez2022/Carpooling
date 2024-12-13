import React, { useState } from 'react'
import axios from 'axios'
import { validationForms } from '../../utils/validators';
import style from './Admin.module.css'
import ModalSuccess from '../../components/ModalSucces';

export default function Admin() {
   const [Error,SetError] = useState({})
   const [form, setForm] = useState({
        first_name :"",
        last_name: "",
        phone: "+54 9",
        gmail :"",
        password:"",
        alias:"",
        status:"",
        subcripted:""
    });
    const hanldersErrors = (form) =>{
      SetError(validationForms(form))
    }
    const handlerForm = ({target}) =>{
        const {value,name} = target;
        hanldersErrors({...form,[name]: value})

        setForm((prevData) => ({
          ...prevData,
          [name]: value, // Actualiza la propiedad correspondiente en el estado
        }));
    }

    const [modal, setModal] =  useState({text:"",response:""})

   

    const createDriver = async() =>{
        console.log('envio de creacion de usuario');
        console.log(form);
        hanldersErrors({...form})
        console.log(Error);
        
        if (Object.keys(Error).length) return 

        try {
          setModal({text:"Enviando Informacíon", response:"pending"})
          const response = await axios.post('http://localhost:3001/api/driver',form)
          console.log(response);
            if (response.status === 200) {
                setForm({  first_name :"",last_name: "",phone: "+54 9",gmail :"",password:"",alias:"",status:"",subcripted:""})
                setModal({text:"Enviando Informacíon", response:"success"})

                
              }
            
        } catch (error) {
          setModal({text:"Enviando Informacíon", response:'rejeicted'})
            
        } finally {

        }
    }

    console.log(Error, 'errores ');
    

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      {modal.text && <ModalSuccess text={modal.text} response={modal.response} />}
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Título */}
        <h2 className="text-blue-600 font-bold text-center text-xl mb-4">
          NUEVO CONDUCTOR
        </h2>
        <p className="text-blue-600 text-center text-sm mb-6">
          Necesitamos que proporcione los datos del nuevo conductor
        </p>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={(e)=> e.preventDefault()} >
          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.first_name}
            name="first_name"
            onChange={handlerForm}
          />

          {/* Apellido */}
          <input
            type="text"
            placeholder="Apellido"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.last_name}
            name="last_name"
            onChange={handlerForm}
          />

          {/* Número de WhatsApp */}
          <input
            type="text"
            placeholder="Comprueba que el número tenga WhatsApp +54 9 ..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.phone}
            name="phone"
            onChange={handlerForm}
          />

          {/* Gmail */}
          <input
            type="email"
            placeholder="Gmail"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.gmail}
            name='gmail'
            onChange={handlerForm}
          />

          {/* Contraseña */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.password}
            name='password'
            onChange={handlerForm}
          />

          {/* CBU */}
          <input
            type="text"
            placeholder="Alias"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.alias}
            name='alias'
            onChange={handlerForm}
          />

          {/* Status */}
          <input
            type="text"
            placeholder="Status"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            value={form.status}
            name='status'
            onChange={handlerForm}
          />
         
         
          {/* Botón */} 

          <button
            onClick={()=>createDriver()}
           
            type="submit"
            className="w-full bg-yellow-400 text-blue-600 font-bold py-3 rounded-md hover:bg-yellow-500"
            >
            Crear conductor 
          </button>
         
        </form>
      {Object.keys(Error).length ? <ul className={style.errorContainers}>
          {Error.first_name && <li>. {Error.first_name}</li>}
          {Error.last_name && <li>. {Error.last_name}</li>}
          {Error.phone && <li>. {Error.phone}</li>}
          {Error.gamil && <li>. {Error.gmail}</li> }
          {Error.password && <li>. {Error.password}</li>}
          {Error.alias && <li>. {Error.alias}</li>}
          {Error.status && <li>. {Error.status}</li>}

            </ul> : null }
      </div>

    </div>

  )
}
