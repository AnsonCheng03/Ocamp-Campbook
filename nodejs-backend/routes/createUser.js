var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {});

router.get("/", function (req, res, next) {
  res.send('respond with a resourcea<script src="/reload/reload.js"></script>');
});

module.exports = router;
