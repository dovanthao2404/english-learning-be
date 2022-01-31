const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { server } = require("../config/server.config");
const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;


        const salt = bcrypt.genSaltSync(10);

        const passwordHash = bcrypt.hashSync(password, salt);

        await User.create({
            email,
            password: passwordHash,
            name
        });


        res.status(201).send("create succeed!");

    } catch (error) {
        res.status(500).send(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userLogin = await User.findOne({
            where: {
                email
            }
        });

        const isAuth = bcrypt.compareSync(password, userLogin.password);
        if (isAuth) {
            const payload = { email, name: userLogin.name, id: userLogin.id };
            const token = jwt.sign(payload, server.secretKey);
            const userNew = { name: userLogin.dataValues.name, nameOriginal: userLogin.name };
            res.send({ user: userLogin, token, userNew });
        }
        else {
            res.status(404).send({ message: "hmm" });
        }

    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { register, login };