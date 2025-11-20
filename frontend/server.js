const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input name="name" placeholder="Enter name" />
      <input name="email" placeholder="Enter email" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", async (req, res) => {
  try {
    await axios.post("http://backend:5000/submit", req.body);
    res.send("Data sent to Flask backend!");
  } catch (err) {
    res.status(500).send("Backend error");
  }
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
