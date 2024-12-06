const express = require("express");
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", [
    body("email").isEmail().withMessage("{call from [user Route] }:Invalid Email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage("{call from [user Route] }:first name sould have atleast 3 character"),
    body("password").isLength({ min: 8 }).withMessage("{call from [user Route] }:password should be of atleast 8 character")
], registerUser)

module.exports = router;