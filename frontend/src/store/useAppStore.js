import { create } from "zustand";
import threadSlice from "./slices/thread.slice";
import uiSlice from "./slices/ui.slice";
import { persist } from "zustand/middleware";

const useAppStore = create(
  persist((set, get, ...a) => ({
    ...threadSlice(set, get, ...a),
    ...uiSlice(set, get, ...a),
    hasHydrated: false,
    setHasHydrated: (value)=>set({hasHydrated: value})
  })),{
    name: "codex-app-store",
    onRehydrateStorage:()=>(state)=>{
        //lifecycle hook that trigger when data has finished moving from localstorage to your store
      state.setHasHydrated(true);
    }
  }
);

export default useAppStore;
