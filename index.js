const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.json());

const responses = JSON.parse(fs.readFileSync("responses.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("🤖 BaYjid Simsimi is running!");
});

app.post("/ask", (req, res) => {
  const userMsg = req.body.message.toLowerCase();
  const reply = responses[userMsg] || "Sorry, I don't understand that.";
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`BaYjid SimSimi is running on port ${PORT}`);
});const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3000;

app.use(express.json());

const responses = JSON.parse(fs.readFileSync("responses.json", "utf-8"));

app.get("/", (req, res) => {
  res.send("🤖 BaYjid Simsimi is running!");
});

app.post("/ask", (req, res) => {
  const userMsg = req.body.message.toLowerCase();
  const reply = responses[userMsg] || "Sorry, I don't understand that.";
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`BaYjid SimSimi is running on port ${PORT}`);
});
