import { v4 as uuid } from "uuid";

function ChatInput({
  prompt,
  setPrompt,
  sendMessage,
  isLoading,
  currentThread,
}) {
  const threadId = currentThread?.id ?? uuid();
  const handleChange = (e) => {
    const { value } = e.target;
    setPrompt(value);
  };

  const handleSubmit = async () => {
    await sendMessage({ message: prompt, threadId: threadId });
    setPrompt("");
  };

  const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubmit();
  }
};

  return (
    <div className="w-full px-4 py-3 bg-[#212121]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 bg-[#303030] rounded-2xl px-3 py-2 border border-[#3a3a3a] focus-within:border-[#565656]">
          <textarea
            rows={1}
            value={prompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Message CodeX..."
            className="flex-1 bg-transparent text-white resize-none outline-none text-sm placeholder-gray-400 max-h-40"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim() || isLoading}
              className={`p-2 rounded-lg  ${
                prompt.trim() && !isLoading
                  ? "bg-white text-black cursor-pointer hover:bg-gray-500"
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
