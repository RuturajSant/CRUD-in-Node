const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const verifyUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Access Denied" });
    }
    try {
        const verifiedUser = jwt.verify(token, JWT_KEY);
        req.user = verifiedUser;
        next();
    } catch (error) {
        return res.status(400).send({ error: "Invalid Token" });
    }
};

module.exports = verifyUser;