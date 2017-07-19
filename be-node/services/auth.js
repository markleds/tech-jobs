const jwt = require("jsonwebtoken");

let AuthService = {};

AuthService.restrict = (req, res, next) => {

  if (!req.headers["authorization"]) {
    return res
    .status(401)
    .json({error: "Please provide a valid JWT"});
  }

  const userData = jwt.verify(req.headers["authorization"], process.env.SECRET_KEY);

  // if (userData && (userData.id === req.params.id)) {
  if (userData) {
    req.user = userData;
    next();
  } else {
    res
    .status(401)
    .json({error: "Invalid JWT token"});
  }
}

AuthService.compareUser

module.exports = AuthService;
