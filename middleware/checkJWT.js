const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const isHaveJWT = false;
  const token = req.headers["x-auth-token"];
  if (!token) {
    res.status(400).json([{ message: "権限がありません" }]);
  } else {
    try {
      let user = await JWT.verify(token, "SECRET_KEY");
      console.log(user);
      req.user = user.email;
      next();
    } catch {
      res.status(400).json([{ message: "トークンが一致しません" }]);
    }
  }
};
