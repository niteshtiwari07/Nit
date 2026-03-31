const {Router} = require('express')
const authController = require("../controllers/auth.controller")
const authMiddileware = require("../middleware/auth.middleware")

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @acess Pulic
 */
authRouter.post("/register",authController.registerUserController)


/**
 * @routes POST/api/auth/login
 * @description login user with email and password
 * @acess Public
 */
authRouter.post("/login",authController.loginUserController)


/**
 * @routes Get
 * @description clear token from user cookie and add  the  token in blacklist
 * @acess public
 */
authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @descriptionget the currently logged in user details
 * @acess Private
 */
authRouter.get("/get-me",authMiddileware.authUser,authController.getMeController)


module.exports = authRouter