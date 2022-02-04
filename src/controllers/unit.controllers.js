const { Unit } = require("../models");

const createUnit = async (req, res) => {
    try {
        const { name, userId } = req.body;

        const unit = await Unit.create({
            name, userId
        });

        res.status(201).send({ message: "create successfully", unit });

    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createUnit };