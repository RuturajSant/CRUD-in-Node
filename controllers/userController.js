const User = require("../models/userModel");

exports.signUp = async (req, res, next) => {
    try {
        const newUser = await createUserObj(req);
        const savedUser = await User.create(newUser);
        return res.status(200).send({ message: "User created successfully", user: savedUser })
    } catch (err) {
        return res.status(400).send({ error: "Unable to create user", error: err })
    }
}

exports.logIn = async (req, res) => {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
        return res.status(400).send({ error: "User not found" })
    } else {
        return res.status(200).send({ message: "User found", user: foundUser })
    }
}

exports.getAllUsers = async (req, res) => {
    const allUsers = await User.find({});
    if (!allUsers) {
        return res.status(400).send({ error: "No users found" })
    } else {
        return res.status(200).send({ message: "Users found", users: allUsers })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return res.status(400).send({ message: "Could to update user" })
        } else {
            return res.status(200).send({ message: "User updated", user: updatedUser })
        }

    } catch (error) {
        return res.status(400).send({ error: "Unable to update user", error: error })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(400).send({ error: "User not found" })
        } else {
            return res.status(200).send({ message: "User deleted successfully", user: deletedUser })
        }
    } catch (error) {
        return res.status(400).send({ error: "Unable to delete user", error: error })
    }
}

exports.data = async (req, res) => {
    return res.status(200).send({ message: "hitting the data route" })
}

const createUserObj = async (req) => {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    };
}