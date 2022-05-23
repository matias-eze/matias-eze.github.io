/* TOMO LOS ELEMENTOS DEL DOM QUE VOY A USAR */
const nombre = document.getElementById('nombre');
const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const mail = document.getElementById('mail');
const contacto = document.getElementById('contacto');
const msj = document.getElementById('msj');
const btnEnviar = document.getElementById('enviar');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const contenedorCheck = document.getElementById('contendor-chekcs');
/* CREO LAS VARIABLES Y CONSTANTES QUE VOY A NECESITAR */
const submit = [];
let cargado = {};
let parrafoCorrecto, parrafoNombre, nombreInvalido, mailInvalido, parrafoMail, parrafoCheck, checkInvalido, nombre1, errorNombre, errorMail, errorCheck;
/* DECLARO LAS EXPRESIONES REGULARES PARA LA VALIDACION DE FORMULARIO */
const expresionesRegulares = {
    nombre: /^[a-zA-Z]/,
    mail: /^[^@]+@[^@]+\.[a-zA-Z]/,
};
/* FUNCION PARA CREAR UN MENSAJE DE ERROR VISIBLE AL USUARIO EN EL DOM */
const msjError = (a, b, c) => {
    a.appendChild(b);
    a.classList.add("recomendacion");
    contacto.appendChild(a);
    c.classList.add("invalid");
};
/* FUNCION PARA RESETEAR VALORES DE CAMPOS DEL FORMULARIO */
const reset = (a) => {
    a.value = "";
};
const reiniciar = (a) => {
    a.addEventListener('click', () => {
        a.classList.remove('invalid');
    })
};
/* FUNCION QUE VALIDA SI NO HUBO ERRORES EN LA CARGA DEL FORMULARIO Y CARGA EL OBJETO EN EL ARRAY SUBMIT Y DA UN MENSAJE DE EXITO*/
const cargar = () => {
    if (errorNombre == true || errorMail == true || errorCheck == true) {
        cargado = {};
    } else if (errorNombre == false && errorMail == false && errorCheck == false) {
        submit.push(cargado);
        cargado = {};
        let textoCorrecto = document.createTextNode('Formulario enviado Exitosamente!')
        parrafoCorrecto=document.createElement('p')
        parrafoCorrecto.appendChild(textoCorrecto);
        parrafoCorrecto.classList.add('recomendacion')
        contacto.appendChild(parrafoCorrecto);
    };
};
/* FUNCION QUE VALIDA EL CAMPO NOMBRE */
const validarNombre = () =>{
    nombreInvalido=document.createTextNode('El nombre debe tener entre 4 y 20 caracteres. Acepta letras mayusculas, minusculas y espacios.');
    parrafoNombre = document.createElement('p');
    let valorNombre = nombre.value;
    if (valorNombre.length < 4 || valorNombre.length > 20 || (expresionesRegulares.nombre.test(valorNombre)==false)){
        msjError(parrafoNombre, nombreInvalido, nombre, errorNombre);
        reset(nombre);
        return errorNombre=true;
    }else {
        cargado.nombre=valorNombre;
        reset(nombre);
        return errorNombre=false;
    };
};
/* FUNCION QUE VALIDA EL CAMPO MAIL */
const validarMail = () => {
    mailInvalido=document.createTextNode('El mail debe contener un formato valido.');
    parrafoMail = document.createElement('p');
    let valorMail = mail.value;
    if(expresionesRegulares.mail.test(valorMail)==false) {
        msjError(parrafoMail, mailInvalido, mail, errorMail);
        reset(mail);
        return errorMail=true;
    } else {
        cargado.mail=valorMail;
        reset(mail);
        return errorMail=false;
    };
};
/* FUNCION QUE VALIDA LOS INPUT TIPO CHECK */
const validarCheck = () => {
    checkInvalido=document.createTextNode('Debe marcar alguna o ambas acciones.');
    parrafoCheck = document.createElement('p');
    valorCheck1 = check1.checked;
    valorCheck2 = check2.checked;
    if (valorCheck1 == false && valorCheck2 == false) {
        msjError(parrafoCheck, checkInvalido, contenedorCheck, errorCheck);
        return errorCheck=true;
    } else {
        cargado.catalogo=valorCheck1;
        cargado.clases=valorCheck2;
        check1.checked = false;
        check2.checked = false;
        return errorCheck=false;
    };
};
/* FUNCION QUE VALIDA Y CORRIJE EL ESTADO DEL DOM PARA DAR MENSAJES CLAROS AL USUARIO Y LLAMA LAS VALIDACIONES PARA CAMPO Y A LA FUNCION CARGAR*/
const validar = () => {
    /* RESETEA EL PARRAFO MENSAJE DEL DOM Y LLAMA A LA FUNCION QUE VALIDA EL CAMPO NOMBRE */
    if(parrafoNombre == undefined){
        validarNombre();
    } else if (parrafoNombre.parentNode == null) {
        parrafoNombre = "";
        nombre.classList.remove("invalid");
        validarNombre();
    } else {
        contacto.removeChild(parrafoNombre);
        nombre.classList.remove("invalid");
        validarNombre();
    };
    /* RESETEA EL PARRAFO MENSAJE DEL DOM Y LLAMA A LA FUNCION QUE VALIDA EL CAMPO MAIL */
    if(parrafoMail == undefined){
        validarMail();
    } else if (parrafoMail.parentNode == null) {
        parrafoMail = "";
        mail.classList.remove("invalid");
        validarMail();
    } else {
        contacto.removeChild(parrafoMail);
        mail.classList.remove("invalid");
        validarMail();
    };
    /* RESETEA EL PARRAFO MENSAJE DEL DOM Y LLAMA A LA FUNCION QUE VALIDA LOS INPUT CHECK */
    if(parrafoCheck == undefined){
        validarCheck();
    } else if (parrafoCheck.parentNode == null) {
        parrafoCheck = "";
        contenedorCheck.classList.remove("invalid");
        validarCheck();
    } else {
        contacto.removeChild(parrafoCheck);
        contenedorCheck.classList.remove("invalid");
        validarCheck();
    };
    /* RESETEA EL PARRAFO MENSAJE DEL DOM Y QUE CARGA LOS DATOS EN EL ARRAY SUBMIT */
    if(parrafoCorrecto == undefined){
        cargar();
    } else if (parrafoCorrecto.parentNode == null) {
        cargar();
    } else {
        contacto.removeChild(parrafoCorrecto);
        cargar();
    };
    reiniciar (nombre);
    reiniciar (mail);
    reiniciar (contenedorCheck);
};
/* OIDOR DE EVENTOS QUE SE ACTIVA AL CLICKEAR EN EL VOTON ENVIAR Y LLAMA A LA FUNCION VALIDAR */
btnEnviar.addEventListener('click', validar);



