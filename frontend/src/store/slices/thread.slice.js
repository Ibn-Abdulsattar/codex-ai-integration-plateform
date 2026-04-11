import threadService from "@/services/thread.service";

const threadSlice = (set, get) => ({
  currentThread: null,
  allThreads: [],
  isLoading: false,
  error: null,
  clearError: () => set({ error: null }),
  
  createNewThread: async (data) => {
    set({ isLoading: true });
    try {
      const res = await threadService.createThread(data);
      set({ isLoading: false });
      get().fetchThread(res.data.id);
      return res.data;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  fetchAllThreads: async () => {
    set({ isLoading: true });
    try {
      const res = await threadService.getAllThreads();
      set({ allThreads: res.data, isLoading: false });
      return res.data;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  fetchThread: async (id) => {
    set({ isLoading: true });
    try {
      const res = await threadService.getThreadById(id);
      console.log("Fetch Thread", res.data);
      set({ currentThread: res.data, isLoading: false });
      return res;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  sendMessage: async (formData) => {
    set({ isLoading: true });
    try {
      const res = await threadService.createChatThread(formData);
      set((state) => ({
        isLoading: false,
        currentThread: res.data,
      }));

      get().fetchAllThreads();
      console.log(res.data);
      return res.data;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  deleteThread: async (id) => {
    set({ isLoading: true });
    try {
      const res = await threadService.deleteThreadById(id);
      set({ isLoading: false });
      get().fetchAllThreads();
      return res;
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
});

export default threadSlice;
