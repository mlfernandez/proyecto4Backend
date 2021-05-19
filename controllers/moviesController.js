const axios = require("axios");

class Peliculas {
  // metodos de funciones controladoras
  async findTopRated() {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1"
    );

    return res.data;
  }

  async searchById(id) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`
    );

    return res.data;
  }

  async searchByTitle(query) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${query}`
    );
    return res.data;
  }

  async searchByGenre(nombre) {
    let code = checkId(nombre,traductorGenero);
    let res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`
    );
    console.log(nombre);
    return res.data;
     
  }

}

let traductorGenero = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
  
];


const checkId = (nombre, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === nombre) {
      return array[i].id
    }
  }
}



// export function checkId();

let moviesController = new Peliculas();
module.exports = moviesController;
