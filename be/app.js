var createError = require("http-errors");
var express = require("express");
var history = require("connect-history-api-fallback");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
// 개발모드에서 뷰포트 8080, 노드포트 3000 포트가 틀려서 보안상 통신이 안되는걸 되게해줌

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(history());
app.use(cors());
app.use("/api", require("./routes/api"));
app.use(express.static(path.join(__dirname, "../", "fe", "dist")));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message });
});

module.exports = app;
