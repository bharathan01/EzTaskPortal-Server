const {Router}= require("express")
const registerNewUser = require("../controlls/userAuth.controller")


const router = Router()

router.route('/register').post(registerNewUser)



module.exports = router