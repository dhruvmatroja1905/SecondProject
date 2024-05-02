import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpassword: String
})

const RegisterModel = mongoose.model("client", RegisterSchema )

module.exports = RegisterModel