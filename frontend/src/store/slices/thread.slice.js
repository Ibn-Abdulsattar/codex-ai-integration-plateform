import threadService from "@/services/thread.service";

const threadSlice = (set, get) => ({
  threads: [],
  currentThread: null,
  isLoading: false,
  error: null,
  clearError: () => set({ error: null }),

  fetchAllThreads: async () => {
    set({ isLoading: true });
    try {
      const data = await threadService.getAllThreads();
      set({ threads: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  fetchThread: async (id) => {
    set({ isLoading: true });
    try {
      const data = await threadService.getThreadById(id);
      set({ currentThread: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  sendMessage: async (formData) => {
    set({ isLoading: true });
    try {
      const response = await threadService.createChatThread(formData);

      set((state) => ({
        currentThread: response.data,
        isLoading: false,
      }));

      get().fetchAllThreads();
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
});

export default threadSlice;
