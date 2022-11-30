import express from "express";
import * as userCtrl from "../controllers/users.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", userCtrl.getUser);
router.put("/:id", authMiddleware, userCtrl.updateUser);
router.delete("/:id", authMiddleware, userCtrl.deleteUser);

export default router;
