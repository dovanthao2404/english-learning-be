const { User, Unit } = require("../models");
const getUnitByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findOne({
            where: { id },
            include: Unit
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { getUnitByUserId };