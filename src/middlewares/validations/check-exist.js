const checkExist = (Model, typeCheck, valueCheck) => async (req, res, next) => {
    try {
        const { id } = req.params;


        const result = await Model.findOne({
            where: {
                [typeCheck || "id"]: req.body[valueCheck || typeCheck] || id
            }
        });

        if (result) {
            next();
        } else {
            res.status(404).send({
                messages: `${valueCheck || typeCheck || "id"} does not exist`,
            });
        }

    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { checkExist };