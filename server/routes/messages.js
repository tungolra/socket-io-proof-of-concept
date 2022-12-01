import express from "express";
import * as messageCtrl from "../controllers/messages.js";

const router = express.Router();

router.post("/", messageCtrl.addMessage);
router.get("/:chatId", messageCtrl.getMessages);

export default router;
