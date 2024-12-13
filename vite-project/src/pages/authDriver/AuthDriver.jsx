import React, { useState } from 'react'
import ModalSuccess from '../../components/ModalSucces';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const validationForm = (form) =>{
    const error = {};
    console.log('validation');
    
    const {first_name,last_name, password} = form;


    if (!first_name || !last_name || !password  ) {
        console.log("error");
        
         error.text = "Completa todos los campos"
         return error
    } 
    if (password.length <= 8) {
        error.text = "La contraseña debe ser mayor a 8 caracteres"
        return error  
    }

    return {}
}



export default function AuthDriver() {
    const navigate = useNavigate();
    const [Errors,setErrors] = useState({
        text : "Completa todos los campos"
    })
    const [form,setForm] = useState({
        first_name : "",
        last_name : "",
        password :"" 
    })
    const [modal, setModal] =  useState({text:"",response:""})

    console.log(form);

    const handlerForm = ({target}) =>{
        const {value,name} = target;

        setForm((prevData) => ({
          ...prevData,
          [name]: value, // Actualiza la propiedad correspondiente en el estado
        }));
        setErrors(validationForm({...form,[name]: value}))
    }


    const sendLogin = async() =>{
        console.log('send data');
        
        try {
            setModal({text:"Verificando las credenciales", response:'pending'})
            const response = await axios.post('http://localhost:3001/api/driver/login',form)
            console.log('response' ,response);

            if (response.status === 200) {
                console.log();
                setModal({text:"",response:""})
                navigate(`/panelControl?name=${form.first_name}&&surname=${form.last_name}`)
            }
        } catch (error) {
            console.log(error);
            
        } finally {

        }
    }
 
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
       {modal.text && <ModalSuccess text={modal.text} response={modal.response} />}
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">INICIO SESSION</h2>
      <p className="text-blue-600 text-center mb-6">Ingresa tus credenciales para ingresar</p>
       
       <form 
            autoComplete="off"
            onSubmit={(e)=> e.preventDefault()}
        >
         <input type="text" style={{ display: 'none' }} />
        <input
        onChange={handlerForm}
          autoComplete="off"
          name='first_name'
          value={form.first_name}
          type="text" 
          placeholder="Nombre del Conductor" 
          className="w-full p-3 mb-4 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input
        onChange={handlerForm}
          autoComplete="off"
          name='last_name'
          value={form.last_name}
          placeholder="Apellido del Conductor" 
          className="w-full p-3 mb-4 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <input
        onChange={handlerForm}
          autoComplete="off"
          name='password'
          value={form.password}
          placeholder="contraseña" 
          className="w-full p-3 mb-6 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        {
            Object.keys(Errors).length 
            ? <p>{Errors.text}</p>
            : <button 
                onClick={()=>sendLogin()}
                type="submit" 
                className="w-full p-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 focus:outline-none"
                >
                Crear conductor
                </button>
        }

      </form>
    </div>
  </div>
  
  )
}
