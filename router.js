const router = require("express").Router();

const movieRouter = require("./routes/moviesRouter");
const seriesRouter = require("./routes/seriesRouter");
const usersRouter= require('./routes/usersRouter');
const orderRouter= require('./routes/orderRouter')

router.use("/movies", movieRouter);
router.use("/series", seriesRouter);
router.use('/users', usersRouter);
router.use('/orders',orderRouter);


module.exports = router;
