const axios = require("axios");

const checkId = require("../utiles");

class Peliculas {
  // metodos de funciones controladoras



  async findComingSoon() {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1"
    );

    return res.data;

    }
    
  async findTopRated() {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1"
    );

    return res.data;
  }

  async searchById(query) { // query = id
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${query}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`
    );

    return res.data;
  }

  async searchByTitle(query) { // query = title
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${query}`
    );
    return res.data;
    console.log(res.data)
  }



  async searchByGenre(query) {  // query = nombre del genero
    // checkId(nombre,traductorGenero)
    let code = checkId(query.toLowerCase());
    let res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`
    );
    return res.data;
  }

  async searchByPerson(personId) {
    let res = await axios.get(
      `http://api.themoviedb.org/3/search/person?query=${personId}&api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );
    return res.data;
  }
}

let moviesController = new Peliculas();
module.exports = moviesController;
