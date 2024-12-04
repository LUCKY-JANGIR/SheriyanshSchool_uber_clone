const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "{call from backend:[ userModel ]}:First name should have atleast 3 characters"]
        },
        lastname: {
            type: String,
            minlength: [3, "{call from backend:[ userModel ]}:Last name should have atleast 3 characters"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "{call from backend:[ userModel ]}:password should be of atleast 8 characters"],
        select: false
    },
    socketId: {
        type: String
    }
});
userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ id: thid._id }, process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hassPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}
const userModel = mongoose.models.User || mongoose.model("user", userSchema);

module.exports = userModel;
