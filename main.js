const nombre = document.getElementById('nombre');
const check1= document.getElementById('check1');
const check2= document.getElementById('check2');
const mail = document.getElementById('mail');
const contacto = document.getElementById('contacto');
let parrafoNombre, nombreInvalido, mailInvalido, parrafoMail, parrafoCheck, checkInvalido, nombre1;
const submit = [];
const cargar = {};

const expresionesRegulares = {
    nombre : /^[a-zA-Z]/,
    mail: /^[^@]+@[^@]+\.[a-zA-Z]/,
}

const validarNombre = () =>{
    nombreInvalido=document.createTextNode('El nombre debe tener entre 4 y 20 caracteres. Acepta letras mayusculas, minusculas y espacios.');
    parrafoNombre = document.createElement('p');
    let valorNombre = document.getElementById('nombre').value;
    if (valorNombre.length < 4 || valorNombre.length > 20 || (expresionesRegulares.nombre.test(valorNombre)==false)){
        parrafoNombre.appendChild(nombreInvalido);
        contacto.appendChild(parrafoNombre);
    }else {
        cargar.nombre=valorNombre;
    }
};

const validarMail = () => {
    mailInvalido=document.createTextNode('El mail debe contener un formato valido.');
    parrafoMail = document.createElement('p');
    let valorMail = document.getElementById('mail').value;
    if(expresionesRegulares.mail.test(valorMail)==false) {
        parrafoMail.appendChild(mailInvalido);
        contacto.appendChild(parrafoMail);
    } else {
        cargar.mail=valorMail;
    };
};

const validarCheck = () => {
    checkInvalido=document.createTextNode('Debe marcar alguna o ambas acciones.');
    parrafoCheck = document.createElement('p');
    valorCheck1 = check1.checked;
    valorCheck2 = check2.checked;
    if (valorCheck1 == false && valorCheck2 == false) {
        console.log('imprimo el error');
        parrafoCheck.appendChild(checkInvalido);
        contacto.appendChild(parrafoCheck);
    } else {
        cargar.catalogo=valorCheck1;
        cargar.clases=valorCheck2;
    }
};

const validar = () => {
    if(parrafoNombre == undefined){
        validarNombre();
    } else if (parrafoNombre.parentNode == null) {
        parrafoNomre = "";
        validarNombre();
    } else {
        contacto.removeChild(parrafoNombre);
        validarNombre();
    };

    if(parrafoMail == undefined){
        validarMail();
    } else if (parrafoMail.parentNode == null) {
        parrafoMail = "";
        validarMail();
    } else {
        contacto.removeChild(parrafoMail);
        validarMail();
    };

    if(parrafoCheck == undefined){
        console.log('undefined');
        validarCheck();
    } else if (parrafoCheck.parentNode == null) {
        console.log('null');
        parrafoCheck = "";
        validarCheck();
    } else {
        console.log('remove');
        contacto.removeChild(parrafoCheck);
        validarCheck();
    };
    submit.push(cargar);
};

const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', validar);
