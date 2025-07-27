"use client";
import { useState } from "react";

export default function AssistantPage() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "👋 Hello Tobiloba! I'm your TOBI TECH Assistant. Ready to help you automate today’s tasks. What would you like to do first?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    // Fake AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "✅ Noted! I’ll prepare that for you shortly." },
      ]);
    }, 1000);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen p-4 text-white bg-black">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl w-fit max-w-md ${
              msg.from === "ai"
                ? "bg-gray-800 text-left"
                : "bg-blue-600 text-right ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 bg-gray-900 p-2 rounded-l-md text-white"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 px-4 rounded-r-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
