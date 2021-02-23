const {Router} = require("express") ;
const {deleteUser,
    updateUser,
    findAllUser,
    createUser
} = require("../controllers/user.controller");

const router = Router()
router.get('/', findAllUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/', deleteUser);
module.exports = router