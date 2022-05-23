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
const submit = [];
const cargar = {};
let parrafoNombre, nombreInvalido, mailInvalido, parrafoMail, parrafoCheck, checkInvalido, nombre1;

const expresionesRegulares = {
    nombre: /^[a-zA-Z]/,
    mail: /^[^@]+@[^@]+\.[a-zA-Z]/,
};

const msjError = (a, b, c) => {
    a.appendChild(b);
    a.classList.add("recomendacion");
    contacto.appendChild(a);
    c.classList.add("invalid");
}

const reset = (a) => {
    a.value = "";
};

const validarNombre = () =>{
    nombreInvalido=document.createTextNode('El nombre debe tener entre 4 y 20 caracteres. Acepta letras mayusculas, minusculas y espacios.');
    parrafoNombre = document.createElement('p');
    let valorNombre = nombre.value;
    if (valorNombre.length < 4 || valorNombre.length > 20 || (expresionesRegulares.nombre.test(valorNombre)==false)){
        msjError(parrafoNombre, nombreInvalido, nombre);
        reset(nombre);
    }else {
        cargar.nombre=valorNombre;
        reset(nombre);
    };
};

const validarMail = () => {
    mailInvalido=document.createTextNode('El mail debe contener un formato valido.');
    parrafoMail = document.createElement('p');
    let valorMail = mail.value;
    if(expresionesRegulares.mail.test(valorMail)==false) {
        msjError(parrafoMail, mailInvalido, mail);
        reset(mail);
    } else {
        cargar.mail=valorMail;
        reset(mail);
    };
};

const validarCheck = () => {
    checkInvalido=document.createTextNode('Debe marcar alguna o ambas acciones.');
    parrafoCheck = document.createElement('p');
    valorCheck1 = check1.checked;
    valorCheck2 = check2.checked;
    if (valorCheck1 == false && valorCheck2 == false) {
        msjError(parrafoCheck, checkInvalido, contenedorCheck);
    } else {
        cargar.catalogo=valorCheck1;
        cargar.clases=valorCheck2;
        check1.checked = false;
        check2.checked = false;
    };
};

const validar = () => {
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

    if(parrafoCheck == undefined){
        validarCheck();
    } else if (parrafoCheck.parentNode == null) {
        parrafoCheck = "";
        validarCheck();
    } else {
        contacto.removeChild(parrafoCheck);
        validarCheck();
    };
    cargar.mensaje=msj.value;
    msj.value="";
    submit.push(cargar);
};

btnEnviar.addEventListener('click', validar);
