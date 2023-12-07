let listaContactos = [];

function agregarContacto(nombre, email, tutor, temas) {
    
  let contacto = {
      nombre: nombre,
      email: email,
      tutor: tutor,
      temas: temas
    };

    listaContactos.push(contacto);
}

// 
function parametros() {
alert("Información guardada correctamente.");
let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let tutor = document.getElementById("tutor").value;
let tema = document.getElementById("tema").value;

// 
agregarContacto(nombre, email, tutor, tema);
}