import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.JWT_KEY;

const authMiddleware = async (req, res, next) => {
  try {
    
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (token) {
      const decoded = jwt.verify(token, SECRET);
      console.log(decoded);
      req.body._id = decoded?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
export default authMiddleware;
