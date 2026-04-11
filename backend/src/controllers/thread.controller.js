import Message from "../models/mssage.model.js";
import Thread from "../models/thread.model.js";
import ExpressError from "../utils/expressError.js";
import getOpenAiResponse from "../utils/getOpenAiResponse.js";

export const createThread = async(req, res, next)=>{
    const { title, id } = req.body;

    if(!title || !id){
        return new ExpressError("Thread Title and Id is required!", 404);
    }
    const thread = await Thread.create({title, id});

    return res.status(201).json({data: thread});
}

export const getAllThreads = async (req, res, next) => {
  const threads = await Thread.findAll({
    order: [["updatedAt", "DESC"]],
  });

  if (!threads) {
    return new ExpressError("No Threads Found!", 404);
  }
  return res.status(200).json({ data: threads });
};

export const getThreadById = async (req, res, next) => {
  const { threadId } = req.params;
  let thread = await Thread.findByPk(threadId, {
    include: [{ model: Message, as: "messages" }],
  });

  if (!thread) {
    return new ExpressError("No Thread Found!", 404);
  }
  return res.status(200).json({ data: thread });
};

export const deleteThreadById = async (req, res, next) => {
  const { threadId } = req.params;
  const thread = await Thread.findByPk(threadId);

  if (!thread) {
    return new ExpressError("No Thread Found!", 404);
  }

  await thread.destroy();
  return res.status(200).json({ message: "Thread deleted successfully!" });
};

export const createChatThread = async (req, res, next) => {
  const { threadId, message } = req.body;

  if (!threadId || !message) {
    return new ExpressError("ThreadId or Message is required!", 404);
  }

  const [thread, created] = await Thread.findOrCreate({
    where: { id: threadId },
    defaults: {
      title: message,
    },
    include: [{ model: Message, as: "messages" }],
  });

  const reply = await getOpenAiResponse(message);

  await Message.bulkCreate([
    { role: "user", content: message, threadId: thread.id },
    { role: "assistant", content: reply, threadId: thread.id },
  ]);

  await thread.reload();
  return res.status(200).json({ data: thread });
};
