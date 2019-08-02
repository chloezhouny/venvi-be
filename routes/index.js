  const path = require("path");
  const router = require("express").Router();

  const apiRoutes = require("./api");
  const userRoutes = require("./auth")

  router.use("/api", apiRoutes);
  router.use("/auth", userRoutes);

  router.use("/")
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

  module.exports = router;