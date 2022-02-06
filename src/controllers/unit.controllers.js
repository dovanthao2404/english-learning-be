const { Unit, User } = require("../models");

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


const updateUnit = async (req, res) => {
    try {
        const { name } = req.body;
        const { result } = req;
        await result.update({
            name
        });
        res.status(200).send({ message: "update successfully" });
    } catch (error) {
        res.status(500).send(error);

    }
};

const deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;
        await Unit.destroy({
            where: { id }
        });
        res.status(200).send({ message: "delete successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};




module.exports = { createUnit, updateUnit, deleteUnit };