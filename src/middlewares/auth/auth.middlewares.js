const jwt = require("jsonwebtoken");
const { server } = require("../../config/server.config");
const authenticate = (Model, typeCheck, valueCheck) => async (req, res, next) => {
    try {
        const { token } = req.headers;
        const isAuth = jwt.verify(token, server.secretKey);
        req.user = isAuth;
        next();
    } catch (error) {
        res.status(404).send({ message: "not login" });
    }
};

module.exports = { authenticate };