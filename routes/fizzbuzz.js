const express = require("express");
const calFizzBuzz = require("../public/js/fizzBuzzCal");
const router = express.Router();
const fizzbuzzArray = calFizzBuzz();

router.get("/", (req, res) => {
  const count = Number(req.query.count);
  if (Number.isNaN(count)) {
    res.json({
      error: "Bad Request - Please input a valid number between 1 and 100"
    });
  } else if (!Number.isInteger(count)) {
    res.json({
      error:
        "Bad Request - Please input a valid positive integer number betwwen 1 and 100"
    });
  } else if (count < 1) {
    res.json({
      error: "Bad Request - Please input positive number between 1 and 100"
    });
  } else if (count > 100) {
    res.status(400).json({
      error: "Bad Request - Please input postive number less that 101"
    });
  } else {
    res.json(fizzbuzzArray.slice(0, count));
  }
});

module.exports = router;
