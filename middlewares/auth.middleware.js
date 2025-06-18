const jwt = require("jsonwebtoken")
const privatedRoute = (req, res, next) => {
    // console.log(req.cookies)
    const token = req.cookies["AUTH-USER"]
    if (!token) {
        return res.status(401).json({ message: "not cookie found" })
    }
    jwt.verify(token, "securepassword", (err, data) => {
        if (err) {
            return res.status(401).json({ message: "invalid token" })
        }
        console.log(data)
        req.user = data._id
        next()
    })

}

module.exports = { privatedRoute }