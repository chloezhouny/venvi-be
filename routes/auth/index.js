module.exports = function(passport) {
  const router = require("express").Router();
  const authRoutes = require("./authRoutes");

  router.use("/google", authRoutes(passport));
}