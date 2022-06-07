const BL = require("../BL/indexCategories"),
  express = require("express"),
  app = express.Router();

app.get("/", async (req, res) => {
  try {
    res.send(await BL.read());
  } catch (error) {
    console.log(error || error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    res.send(await BL.create(req.body));
  } catch (error) {
    console.log(error || error.message);
  }
});
app.put("/:id", async (req, res) => {
  try {
    res.send(await BL.put(req.params.id, req.body));
  } catch (error) {
    console.log(error || error.message);
  }
});
app.delete("/:id", async (req, res) => {
  try {
    res.send(await BL.del(req.params.id));
  } catch (error) {
    console.log(error || error.message);
  }
});
module.exports = app;
