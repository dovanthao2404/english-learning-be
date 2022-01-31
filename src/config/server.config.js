require("dotenv").config();

const server = {
    secretKey: process.env.SECRET_KEY
};

module.exports = { server };