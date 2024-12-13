export const validatePhone = (phone) =>{
    // Elimina espacios, guiones o paréntesis
    const cleanedPhone = phone.replace(/[\s()-]/g, '');

    // Expresión regular para números móviles argentinos
    const argentinePhoneRegex = /^\+54\d{10,13}$/;
    if (!argentinePhoneRegex.test(cleanedPhone)) {
        return 'El número de teléfono no es válido para Argentina, recuerda colocar +54 9 ...';
    }

    return '';
};


export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) || 'El correo electrónico no es válido';
};

// Puedes exportar un conjunto de validaciones comunes
export const validateRequired = (value) => value.trim() !== '' || 'Debes completar todos los campos';


export const validationForms = (form) =>{
    const errors = {};

    if (!form.first_name.trim()) {
        errors.first_name = "El Nombre es obligatorio"
    }
    if (!form.last_name.trim()) {
        errors.last_name = "El Apellido es obligatorio"
    }


    // Validar contraseña
    if (!form.password.trim()) {
        errors.password = "La contraseña es obligatoria";
    } else if (form.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
     // Validar alias
     if (!form.alias.trim()) {
        errors.alias = "El alias es obligatorio";
    } else if (form.alias.length < 3) {
        errors.alias = "El alias debe tener al menos 3 caracteres";
    }

    // Validar estado
    if (!form.status.trim()) {
        errors.status = "El estado es obligatorio";
    }


    // Elimina espacios, guiones o paréntesis
    const cleanedPhone = form.phone.replace(/[\s()-]/g, '');

    // Expresión regular para números móviles argentinos
    const argentinePhoneRegex = /^\+54\d{10,13}$/;
    if (!argentinePhoneRegex.test(cleanedPhone)) {
        errors.phone = 'El número de teléfono no es válido para Argentina, recuerda colocar +54 9 ...';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.gmail.trim()) {
        errors.gmail = "El correo electrónico es obligatorio";
    } else if (!emailRegex.test(form.gmail)) {
        errors.gmail = "El correo electrónico no es válido";
    }


    return errors;

}


/*

 first_name :"",
        last_name: "",
        phone: "+54 9",
        gmail :"",
        password:"",
        alias:"",
        status:"",
        subcripted:""
*/