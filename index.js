import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.get("", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/working.html"));
});

app.listen(3000, () => console.log("app listening on port 3000"));
