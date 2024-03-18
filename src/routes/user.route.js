const {Router}= require("express")
const {registerNewUser,loginUser} = require("../controlls/userAuth.controller")


const router = Router()

router.route('/register').post(registerNewUser)
router.route("/login").post(loginUser)



module.exports = router