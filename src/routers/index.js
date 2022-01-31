const { Router } = require("express");
const { unitRouter } = require("./unit.routes");
const { userRouter } = require("./user.routes");

const rootRouter = Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/units", unitRouter);

module.exports = { rootRouter };
