"use client";
import React, { useState } from "react";
import ChatInput from "@/components/chatInput/ChatInput";
import UserLayout from "@/layout/userLayout/UserLayout";
import useAppStore from "@/store/useAppStore";
import { ScaleLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const sendMessage = useAppStore((state) => state.sendMessage);
  const isLoading = useAppStore((state) => state.isLoading);
  const currentThread = useAppStore((state) => state.currentThread);
  const messages = currentThread?.messages ?? [];
  return (
    <UserLayout>
      <ScaleLoader
        color="#ffffff"
        loading={isLoading}
        className="mx-auto top-1/2 left-1/2 transition absolute"
      />
      <div className="flex flex-col justify-between w-full h-[99%]">
        {/* Chat*/}
        <div className="overflow-y-auto flex flex-col-reverse items-center">
          <div className={`overflow-y-auto`}>
            {/* user message */}
            {messages.length > 0 &&
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-3xl p-4 rounded-lg ${
                    msg.role === "user"
                      ? "user-message  text-right ml-auto"
                      : "ai-message bg-gray-800 text-gray-100 rounded-tl-none"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap inline-block">
                      {msg.content}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Chat Input Bar */}
        <div className=" h-[16%]">
          <ChatInput
            prompt={prompt}
            setPrompt={setPrompt}
            sendMessage={sendMessage}
            isLoading={isLoading}
            currentThread={currentThread}
          />
        </div>
      </div>
    </UserLayout>
  );
}
