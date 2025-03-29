import mongoose from "mongoose";

//schema:Schema sirf ek structure hai (Excel ke columns ki tarah).
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    verificationToken: {
        type: String
    },

    resetPasswordToken: {
        type: String
    },

    resetPasswordExpires:{
        type: Date
    }

},{
    timestamps: true,
});

//model: Model MongoDB ka ek interface hai jo schema ko follow karta hai aur database me CRUD operations (Create, Read, Update, Delete) perform karne ke liye use hota hai.
const User = mongoose.model("User", userSchema); //jaise hi db me jaega users ho jaega

export default User;