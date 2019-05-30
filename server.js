const express = require("express");
const app = express();
const dotenv = require("dotenv");
import "@babel/polyfill";

import ReflectionWithJSObject from "./src/usingJSObject/controllers/Reflection";
import ReflectionWithDB from "./src/usingDB/controllers/Reflection";

dotenv.config();
const Reflection = (process.env.TYPE = "db"
  ? ReflectionWithDB
  : ReflectionWithJSObject);

app.use(express.json()); //parses request to json

app.get("/", (req, res) => {
  return res.status(200).send({ message: "WHOHAAAA" });
});

app.post("/api/v1/reflections", Reflection.create);
app.get("/api/v1/reflections", Reflection.getAll);
app.get("/api/v1/reflections/:id", Reflection.getOne);
app.put("/api/v1/reflections/:id", Reflection.update);
app.delete("/api/v1/reflections/:id", Reflection.delete);

app.listen(3001, () => console.log("Server running on port:3001"));
