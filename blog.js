
const formularioLibro = document.getElementById("libroId");
const formularioCancion = document.getElementById("cancionId");
const formularioPelicula = document.getElementById("peliculaId");

const transparenteLibro = document.getElementById("transparenteIdLibro");
const transparenteCancion = document.getElementById("transparenteIdCancion");
const transparentePelicula = document.getElementById("transparenteIPelicula");

const cerrarLibro = document.getElementById("cerrarIdLibro");
const cerrarCancion = document.getElementById("cerrarIdCancion");
const cerrarPelicula = document.getElementById("cerrarIdPelicula");

const agregarLibro = document.getElementById("formularioLibro");
const agregarCancion = document.getElementById("formularioCancion");
const agregarPeliucla = document.getElementById("formularioPelicula");


//abrir formulario
formularioLibro.onclick = () => transparenteLibro.style.display="flex";
formularioCancion.onclick = () => transparenteCancion.style.display="flex";
formularioPelicula.onclick = () => transparentePelicula.style.display="flex";

//cerrar formulario
cerrarLibro.onclick = () => transparenteLibro.style.display = "none";
cerrarCancion.onclick = () => transparenteCancion.style.display = "none";
cerrarPelicula.onclick = () => transparentePelicula.style.display = "none";


window.onclick = (e) =>{
if(e.target === transparenteLibro) transparenteLibro.style.display = "none";
}

window.onclick = (e) =>{
    if(e.target === transparenteCancion) transparenteCancion.style.display = "none";
    }

window.onclick = (e) =>{
    if(e.target === transparentePelicula) transparentePelicula.style.display = "none";
        }
    

//arrayspara cada seccion
let librosArray = JSON.parse(localStorage.getItem("libros")) || [];
let cancionesArray = JSON.parse(localStorage.getItem("canciones")) || [];
let peliculasArray = JSON.parse(localStorage.getItem("peliculas")) || [];



agregarLibro.addEventListener('submit' , (e) => {
    e.preventDefault();

const nombre = document.getElementById("nombreLibro").value;
const autor = document.getElementById("autorLibro").value;
const año = document.getElementById("añoLibro").value;
const genero = document.getElementById("generoLibro").value;
 const fotoFile = document.getElementById("fotoL").files[0]; // CORRECTO

    if(fotoFile){ // Verificamos que haya archivo seleccionado
        const reader = new FileReader();

        reader.onload = function(e){
            const fotoBase64 = e.target.result; // Aquí tenemos la foto en Base64
            const nuevoLibro = new Libro(nombre, autor, año, genero, fotoBase64);

            librosArray.push(nuevoLibro);
            localStorage.setItem("libros" , JSON.stringify(librosArray));
            mostrarLibro();
        }

        reader.readAsDataURL(fotoFile); // Convierte a Base64
    }
    
})



function mostrarLibro(){
    const contenedor = document.getElementById("contenedorLibros");
    contenedor.innerHTML="";

    librosArray.forEach(libro => {
        
        
        
contenedor.innerHTML += `<div class="tablaLibros">
        <h3>${libro.nombre}</h3>
        <p>${libro.autor}</p>
        <p>${libro.año}</p>
        <p>${libro.genero}</p>
            <img src="${libro.fotoLibro}" alt="Portada de ${libro.nombre}" style="max-width:100px; border-radius:5px;">
        </div>
        `;
});
}





document.addEventListener("DOMContentLoaded", () => {
    mostrarLibro();
});