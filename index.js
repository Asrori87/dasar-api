const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params; // create new data // params = dari url
  const { logo } = req.body; // body = dari json body

  if (!logo) {
    res.status(418).send({ message: "we need a logo!" });
  }

  res.send({
    tshirt: `👕 with your ${logo}, and ID of ${id}`,
  });
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
