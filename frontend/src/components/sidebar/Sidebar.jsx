"use client";
import useAppStore from "@/store/useAppStore";
import { useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function Sidebar() {
  const fetchAllThreads = useAppStore((state) => state.fetchAllThreads);
  const allThreads = useAppStore((state) => state.allThreads);
  const fetchThread = useAppStore((state) => state.fetchThread);
  const hasHydrated = useAppStore((state) => state.hasHydrated);
  const isLoading = useAppStore((state) => state.isLoading);
  const deleteThread = useAppStore((state) => state.deleteThread);
const createNewThread = useAppStore((state) => state.createNewThread);
  useEffect(() => {
      fetchAllThreads();
  }, [fetchAllThreads]);

  const handleThreadClick = (threadId) => {
    fetchThread(threadId);
  };

  const handleDeleteThread = (threadId) => {
    deleteThread(threadId);
  };

  const handleNewChat= ()=>{
    createNewThread();
  }

  return (
    <div className="h-full w-64 bg-[#171717] text-white flex flex-col">
      <ScaleLoader
        color="#ffffff"
        loading={isLoading && !hasHydrated}
        className="mx-auto top-1/2 left-1/2 transition absolute"
      />
      {/* Top Section */}
      <div className="p-3 border-b border-[#2a2a2a]">
        <button className="flex items-center justify-between gap-2 w-full px-3 py-2 rounded-md bg-[#2a2a2a] hover:bg-[#3a3a3a]  transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>
          CodeX
          <div onClick={handleNewChat} className="cursor-pointer rounded p-1">
            <span className="text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            </span>
          </div>
        </button>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {/* Chat Item */}
        {allThreads.length > 0 && allThreads.map((el, idx) => (
          <div
            key={idx}
            className="group flex gap-2 items-center justify-between px-3 py-2 rounded-md hover:bg-[#2a2a2a] cursor-pointer"
          >
            <div
              onClick={() => {
                handleThreadClick(el.id);
              }}
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <span className="text-sm min-w-0 truncate chat-title">{el.title || "Untitled Chat"}</span>
            </div>

            {/* Hover Actions */}
            <button
              onClick={() => handleDeleteThread(el.id)}
              className="opacity-0 group-hover:opacity-100 p-1 cursor-pointer hover:bg-[#3a3a3a] rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-3 flex  items-center justify-between border-t border-[#2a2a2a] text-xs text-gray-400">
        <p className="hover:text-white text-base cursor-pointer">
          Created by Usman
        </p>
        <p className="text-lg">❤️</p>
      </div>
    </div>
  );
}

export default Sidebar;
