const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "Get all products" });
});

router.get("/:id", (req, res) => {
  // res.json({ mssg: `Get product with id:${id}` });
  res.json({ mssg: "Get one product" });
});

// router.post("/:id", (req, res) => {
//   // res.json({ mssg: `Get product with id:${id}` });
//   res.json({ mssg: "Post one product" });
// });

// router.delete("/:id", (req, res) => {
//   // res.json({ mssg: `Get product with id:${id}` });
//   res.json({ mssg: "Post one product" });
// });

module.exports = router;
