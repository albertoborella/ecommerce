import independencia from "../assets/tapas/Independencia.jpg" 
import anatomia from "../assets/tapas/anatomia_de_un_instante.jpg"
import aramburu from "../assets/tapas/Aramburu.jpg"
import patria from "../assets/tapas/patria.png"

export const libros = [
  {
    id: 1,
    titulo: "Independencia",
    autor: "Javier Cercas",
    precio: 15000,
    categoria: "Narrativa",
    stock: 0,
    imagen: independencia,
    paginas: 280
  },
  {
    id: 2,
    titulo: "Anatomía de un instante",
    autor: "Javier Cercas",
    precio: 15000,
    categoria: "Narrativa",
    stock: 10,
    imagen: anatomia,
    paginas: 280
  },
  {
    id: 3,
    titulo: "Aramburu",
    autor: "María O´Donnell",
    precio: 16000,
    categoria: "Hechos Reales",
    stock: 15,
    imagen: aramburu,
    paginas: 280
  },
  {
    id: 4,
    titulo: "Patria",
    autor: "Fernando Aramburu",
    precio: 19000,
    categoria: "Novela",
    stock: 15,
    imagen: patria,
    paginas: 280
  },
];

export const getLibros = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    },1000);
  });
};

export const getLibroId = (id) => {
  return new Promise((resolve) => {
    const libroId = libros.find((libro) => libro.id === parseInt(id))
    setTimeout(() => {
      resolve(libroId)
    }, 1000)
  })
}

export const getLibroCategoria = (categoriaId) => {
  return new Promise((resolve) => {
      const librosFiltrados = libros.filter(
        (libro) => libro.categoria === categoriaId
      );
      setTimeout(() => {
        resolve(librosFiltrados);
      }, 1000);
    });
};

