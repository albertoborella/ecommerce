import independencia from "../assets/tapas/Independencia.jpg" 
import anatomia from "../assets/tapas/anatomia_de_un_instante.jpg"
import aramburu from "../assets/tapas/Aramburu.jpg"
import patria from "../assets/tapas/patria.png"
import diario from "../assets/tapas/diario_de_una_temporada_en_el_quinto_piso.webp"




export const libros = [
  {
    id: 1,
    titulo: "Independencia",
    autor: "Javier Cercas",
    precio: 15000,
    categoria: "narrativa",
    stock: 15,
    imagen: independencia,
  },
  {
    id: 2,
    titulo: "Anatomía de un instante",
    autor: "Javier Cercas",
    precio: 15000,
    categoria: "narrativa",
    stock: 10,
    imagen: anatomia,
  },
  {
    id: 3,
    titulo: "Aramburu",
    autor: "María O´Donnell",
    precio: 16000,
    categoria: "hechos_reales",
    stock: 15,
    imagen: aramburu,
  },
  {
    id: 4,
    titulo: "Patria",
    autor: "Fernando Aramburu",
    precio: 19000,
    categoria: "novela",
    stock: 15,
    imagen: patria,
  },
  {
    id: 5,
    titulo: "Diario de una temporada en el quinto piso",
    autor: "Javier de la Torre",
    precio: 13000,
    categoria: "hechos_reales",
    stock: 15,
    imagen: diario,
  },
];

export const getLibros = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    }, 500);
  });
};

export const getLibroId = (libroId) => {
  return new Promise((resolve) => {
    setTiemeout(() => {
      resolve(libros.find(libro => libro.id === libroId))
    },500)
  })
}

export const getLibroCategoria = (categoriaId) => {
  return new Promise((resolve) => {
      const librosFiltrados = libros.filter(
        (libro) => libro.categoria === categoriaId
      );
      setTimeout(() => {
        resolve(librosFiltrados);
      }, 2000);
    });
};

