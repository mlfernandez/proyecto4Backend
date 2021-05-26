const router = require('express').Router();
const usersController = require('../controllers/usersController');

//CRUD

router.get('/', async(req, res) => {
    try {
        res.json(await usersController.findAllUsers())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async(req, res) => {
    try {
        const id = await usersController.signUpUser(req.body);
        const status = 'success';
        res.json({ status, id });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;
