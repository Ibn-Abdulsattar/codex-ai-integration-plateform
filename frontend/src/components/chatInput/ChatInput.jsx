"use client";
import React, { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full px-4 py-3 bg-[#212121]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 bg-[#303030] rounded-2xl px-3 py-2 border border-[#3a3a3a] focus-within:border-[#565656]">
          <button className="text-gray-400 hover:text-white p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <textarea
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message CodeX..."
            className="flex-1 bg-transparent text-white resize-none outline-none text-sm placeholder-gray-400 max-h-40"
          />

          <div className="flex items-center gap-2">
            <button
              disabled={!message.trim()}
              className={`p-2 rounded-lg ${
                message.trim()
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-[#3a3a3a] text-gray-500 cursor-not-allowed"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-2">
          CodeX can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
}

export default ChatInput;
