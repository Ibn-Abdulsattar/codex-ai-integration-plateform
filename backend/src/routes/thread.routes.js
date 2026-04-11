import express from "express";
import {
  createChatThread,
  createThread,
  deleteThreadById,
  getAllThreads,
  getThreadById,
} from "../controllers/thread.controller.js";
import wrapAsync from "../utils/wrapAsync.js";
const router = express.Router();

router.route("/create").post(wrapAsync(createThread));
router.route("/").get(wrapAsync(getAllThreads));
router
  .route("/:threadId")
  .get(wrapAsync(getThreadById))
  .delete(wrapAsync(deleteThreadById));
router.route("/chat").post(wrapAsync(createChatThread));

export default router;
