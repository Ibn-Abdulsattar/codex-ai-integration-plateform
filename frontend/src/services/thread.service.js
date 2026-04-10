import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const baseUrl = new axios(`${serverUrl}/api/thread`, {withCredentials: true});

const threadService = {
    getAllThreads: async()=>{
        const res = await baseUrl.get("/");
        return res.data;
    },
    getThreadById: async(id)=>{
        const res = await baseUrl.get(`/${id}`);
        return res.data;
    },
    deleteThreadById: async(id)=>{
        const res = await baseUrl.delete(`/${id}`);
        return res.data;
    },
    createChatThread: async(formData)=>{
        const res = await baseUrl.post("/chat", formData);
        return res.data;
    }
};

export default threadService;