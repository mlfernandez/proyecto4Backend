const router = require('express').Router();
const orderController = require('../controllers/ordersController');

//API CRUD PASAJERO

router.get('/', async (req, res) => {
    try{
        res.json(await orderController.allOrders());
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        res.json(await orderController.orderId(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
router.post('/', async (req, res) => {
    try{
        const body = req.body;
        res.json(await orderController.newOrder(body));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})
router.put('/', async (req, res) => {
    try {
        const cuerpoDeDatos = req.body;
        res.json(await orderController.modifyOrder(cuerpoDeDatos));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await orderController.deleteOrder(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});
module.exports = router;