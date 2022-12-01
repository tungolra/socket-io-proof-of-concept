import express from "express";
import * as chatCtrl from "../controllers/chat.js";

const router = express.Router();

router.post("/", chatCtrl.createChat);
router.get("/:userId", chatCtrl.userChats);
router.get("/find/:firstId/:secondId", chatCtrl.findChats);

export default router;
