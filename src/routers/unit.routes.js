const { Router } = require("express");

const unitRouter = Router();

unitRouter.post("/", createUnit);

module.exports = { unitRouter };