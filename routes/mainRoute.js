const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("MY OWN FIRST ROUTE");
})

module.exports = router;