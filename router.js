const router = require("express").Router();

const movieRouter = require("./routes/moviesRouter");
const seriesRouter = require("./routes/seriesRouter");

router.use("/movies", movieRouter);
router.use("/series", seriesRouter);

module.exports = router;
