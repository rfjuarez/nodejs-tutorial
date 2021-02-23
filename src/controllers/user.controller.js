const createUser=(req, res) => {
    const {name, email} = req.body;
    res.json({
        user:{
            name,
            email
        },
        "path":"createUser"});
};
const updateUser=(req, res) => {
    const {id}= req.params;
    res.json({
        user:{
            id
        },
        "path":"updateUser"
    });
};
const findAllUser=(req, res) => {
    const {page=1,limit=10} = req.query;
    res.json({
        paged:{
            page,
            limit
        },
        "path":"findAllUser"
    });
};

const deleteUser=(req, res) => {
    res.json({"msg":"deleteUser"});
};
module.exports = {
    createUser,
    updateUser,
    findAllUser,
    deleteUser
}