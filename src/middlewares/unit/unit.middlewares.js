const res = require("express/lib/response");
const checkIsUserCreated = (Model, message) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const { user } = req;
        const result = await Model.findOne({
            where: {
                id
            }
        });
        if (result.userId === user.id) {
            req.result = result;
            next();
        } else {
            res.status(400).send({ message });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { checkIsUserCreated };