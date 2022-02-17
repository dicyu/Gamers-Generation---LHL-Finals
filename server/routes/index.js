const router = require("express").Router();

/* GET home page. */

router.get("/", (req, res) => {
  console.log("hello?", res);
  return res.render("index", { title: "Express" });
});

module.exports = router;
