const axios = require("axios");

class Peliculas {
  // metodos de funciones controladoras
  async findTopRated() {
    let res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`
    );
    return res.data;
  }
  async searchById(id) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`
    );
    return res.data;
  }
}

let moviesController = new Peliculas();
module.exports = moviesController;

//hola mundo