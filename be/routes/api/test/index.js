var express = require("express");
var createError = require("http-errors");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send({ msg: "괜찮아", a: 1 });
});

router.get("/hello", function(req, res, next) {
  res.send({ msg: "hello", a: 1 });
});

/* GET home page. */
router.all("*", function(req, res, next) {
  next(createError(404, "그런거 없어요"));
});

module.exports = router;
