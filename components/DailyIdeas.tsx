"use client";

import { useEffect, useState } from "react";

const platforms = ["Facebook", "Instagram", "Twitter/X", "WhatsApp"];

export default function DailyIdeas() {
  const [ideas, setIdeas] = useState<string[]>([]);

  useEffect(() => {
    // Later, this will be fetched from your AI assistant backend.
    const sampleIdeas = platforms.map(
      (platform) => `Post an engaging quote about success on ${platform}.`
    );
    setIdeas(sampleIdeas);
  }, []);

  return (
    <div className="mt-6 bg-gray-800 text-white rounded-xl p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">📌 Daily Content Ideas</h2>
      <ul className="space-y-2 list-disc list-inside">
        {ideas.map((idea, idx) => (
          <li key={idx}>{idea}</li>
        ))}
      </ul>
    </div>
  );
}
