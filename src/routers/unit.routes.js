const { Router } = require("express");
const { createUnit, updateUnit, deleteUnit, getUnitByUserId } = require("../controllers/unit.controllers");
const { authenticate } = require("../middlewares/auth/auth.middlewares");
const { checkIsUserCreated } = require("../middlewares/unit/unit.middlewares");
const { checkExist } = require("../middlewares/validations/check-exist");
const { User, Unit } = require("../models");
const unitRouter = Router();

// create unit
unitRouter.post("/", authenticate(User), createUnit);
// update unit
unitRouter.put("/:id", authenticate(User), checkExist(Unit), checkIsUserCreated(Unit, "You cannot update "), updateUnit);
// delete unit
unitRouter.delete("/:id", authenticate(User), checkExist(Unit), checkIsUserCreated(Unit, "You cannot delete "), deleteUnit);


module.exports = { unitRouter };