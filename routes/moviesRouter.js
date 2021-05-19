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

module.exports = router;