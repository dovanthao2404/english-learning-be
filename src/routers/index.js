const { Router } = require("express");
const { authRouter } = require("./auth.routes");
const { unitRouter } = require("./unit.routes");
const { userRouter } = require("./user.routes");

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/units", unitRouter);

module.exports = { rootRouter };
