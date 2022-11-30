import express from "express";
import * as userCtrl from "../controllers/users.js";

const router = express.Router();

router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

export default router;
