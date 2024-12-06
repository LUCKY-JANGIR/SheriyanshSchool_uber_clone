const userModel = require("../models/user.model");

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !passwaord) {
        throw new Error(
            "{call from (user.services)}:all frield are required"
        );
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}