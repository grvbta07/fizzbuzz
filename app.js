const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("connected");
});

app.use("/api", require("./routes/fizzbuzz"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Server connected at ${PORT}`);
  }
});
