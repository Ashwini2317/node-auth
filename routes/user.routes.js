
const { allusers, getProfile } = require("../controllers/user.controller")
const { privatedRoute } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    .get("/", privatedRoute, allusers)
    .get("/profile", getProfile)

module.exports = router