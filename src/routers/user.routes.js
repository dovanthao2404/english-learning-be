const { Router } = require("express");
const { authenticate } = require("../middlewares/auth/auth.middlewares");
const { User } = require("../models");
const { getUnitByUserId } = require("../controllers/user.controllers");

const userRouter = Router();



// get unit by user id
userRouter.get("/:id", authenticate(User), getUnitByUserId);

module.exports = { userRouter };
