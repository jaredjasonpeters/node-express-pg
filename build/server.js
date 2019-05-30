import { express } from "express";

const app = express();

app.use(express.json()); //parses request to json

app.get("/", (req, res) => {
  return res.status(200).send({ message: "WHOHA" });
});

app.listen(3001, port => console.log("Server running on port", port));