const router = require("express").Router();
const authenticate = require("../../../sequelize/dia2/middleware/authenticate");
const usersController = require("../controllers/usersController");

//CRUD

router.get("/", async (req, res) => {
  try {
    res.json(await usersController.findAllUsers());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/email/:email", async (req, res) => {
  try {
    res.json(await usersController.findByEmail());
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/:id", authenticate, async (req, res) => {
  try {
    const id = req.params.id;

    res.json(await pasajeroController.findByUserId(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;

    res.json(await pasajeroController.newUser(body));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.put("/", authenticate, async (req, res) => {
  try {
    const cuerpoDeDatos = req.body;
    res.json(await pasajeroController.modifyUser(cuerpoDeDatos));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

router.delete("/:id", authenticate, async (req, res) => {
  try {
    const id = req.params.id;
    res.json(await pasajeroController.deleteUser(id));
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
