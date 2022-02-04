const { Router } = require("express");
const { createUnit } = require("../controllers/unit.controllers");
const { authenticate } = require("../middlewares/auth/auth.middlewares");
const { User } = require("../models");
const unitRouter = Router();

unitRouter.post("/", authenticate(User), createUnit);

module.exports = { unitRouter };