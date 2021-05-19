const router = require('express').Router();
const moviesController = require('../controllers/moviesController')

//CRUD 

// http://localhost:3000/movies/

router.get("/",async(req, res) => {
    try{
        res.json(await moviesController.findTopRated())
    }catch(err) {
        return res.status(500).json({
            mensaje: err.mensaje
        });
    }
});

router.get('/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        res.json(await moviesController.searchById(id));

    }catch(err){
        return res.status(500).json({
            mensaje: err.mensaje
    });
   }
});

router.get("/search/:query", async (req, res) => {
    try {
      let query = req.params.query; //req de requiere param de parametros si va por el body seria body
      res.json(await moviesController.searchByTitle(query));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });


module.exports = router;