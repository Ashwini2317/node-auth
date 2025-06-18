const User = require("../models/User")

const allusers = async (req, res) => {
    const result = await User.find()
    res.json({ message: "user fetch success", result })
}
const getProfile = async (req, res) => {
    res.json({ message: "user profile fetch success" })
}
module.exports = { allusers, getProfile }