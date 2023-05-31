const {Router} = require("express");
// This imports just the Router method from the express library
const userRouter = Router();
// This renames Router to be userRouter

const {registerUser, login, readUsers, updateUser, deleteUser} = require("./controllers");
const { hashThePassword, comparePasswords, validateEmail, tokenCheck } = require ("../middleware")

//CREATE

//TODO: Email validation middleware added to the register route
userRouter.post("/users/register", validateEmail, hashThePassword, registerUser);
// Creates the end point /users/register for a HTTP POST request and causes it to run registerUser

// added login function to allow the users to login
userRouter.post("/users/login", comparePasswords, login)

// added the READ users function
userRouter.get("/users/readUsers", readUsers) // protected route

//auth check 
userRouter.get ("/users/authCheck", tokenCheck, login)
// added the UPDATE function to allow for details to be updated
userRouter.put("/users/update", updateUser)

//added the DELETE function to allow users to delete accounts from the database
userRouter.delete("/users/delete", deleteUser)


module.exports = userRouter;