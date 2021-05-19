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
}

let moviesController = new Peliculas();
module.exports = moviesController;
