import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const threadClient = axios.create({
  baseURL: `${serverUrl}/api/thread`,
  withCredentials: true,
});
const threadService = {
  createThread: async(formData)=>{
    const res = await threadClient.post("/create", formData);
    return res.data;
  },
  getAllThreads: async () => {
    const res = await threadClient.get("/");
    return res.data;
  },
  getThreadById: async (id) => {
    const res = await threadClient.get(`/${id}`);
    return res.data;
  },
  deleteThreadById: async (id) => {
    const res = await threadClient.delete(`/${id}`);
    return res.data;
  },
  createChatThread: async (formData) => {
    const res = await threadClient.post("/chat", formData);
    return res.data;
  },
};

export default threadService;
