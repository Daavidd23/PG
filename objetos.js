



//libros

class Libro {
    constructor(nombre,autor,año,genero,fotoLibro){
        this.nombre = nombre;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
        this.fotoLibro =fotoLibro;
    }
}

const libros = JSON.parse(localStorage.getItem("libros")) || [];


function agregarLibros(libro){
    libros.push(libro);
    localStorage.setItem("libros" , JSON.stringify(libros));
}





//canciones

class Cancion {
    constructor(nombre,artista,año,genero) {
        this.nombre = nombre;
        this.artista = artista;
        this.año = año;
        this.genero= genero;
    }
}


const canciones= JSON.parse(localStorage.getItem("canciones")) || [];


function agregarCanciones(cancion){
    canciones.push(cancion);
    localStorage.setItem("canciones" , JSON.stringify(canciones));
}



//peliculas

class Pelicula{
    constructor(nombre,autor,año,genero){
    this.nombre = nombre;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
    }
}


const peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];


function AgregarPeliuclas(pelicula){
    peliculas.push(pelicula);
    JSON.setItem("peliculas", JSON.stringify(peliculas));
}


  function showFileName() {
    const file = document.getElementById('fotoL').files[0];
    if(file) {
      document.getElementById('fileName').textContent = file.name;
    }
  }