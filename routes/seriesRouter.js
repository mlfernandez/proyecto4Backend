const router = require('express').Router();
const seriesController =  require('../controllers/seriesController')




// get 
// http://localhost:3000/series


router.get("/", async(req , res ) =>{
    try{
        res.json(await seriesController.findTopSeries())
    }catch(err){
        return res.status(500).json({
            mensaje:err.mensaje
        });
    }
});

router.get("/:id", async(req ,res)=>{
    try{
       let id = req.params.id;
       res.json(await seriesController.searchSeriesById(id));
       
    }catch(err){
        return res.status(500).json({
            mensaje: err.mensaje
        });
        
    }
});

module.exports = router;