const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const authToken = req.cookies.authToken;

  if (!authToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decoded = jwt.verify(authToken, process.env.TOKEN_KEY);
    req.user_id = decoded.user_id;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = authenticateUser;
