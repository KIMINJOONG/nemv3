var express = require("express");
var createError = require("http-errors");
var router = express.Router();

router.use("/test", require("./test"));
router.use("/user", require("./user"));

/* GET home page. */
router.all("*", function(req, res, next) {
  next(createError(404, "그런거 없어요"));
});

module.exports = router;
