"use client";

import { useState, useEffect } from "react";

type FormEntry = {
  id: number;
  name: string;
  interest: string;
};

export default function FormMonitor() {
  const [entries, setEntries] = useState<FormEntry[]>([]);

  useEffect(() => {
    // This will later fetch real entries from your Google Sheet.
    const mockEntries = [
      { id: 1, name: "Jane Doe", interest: "Shopify store setup" },
      { id: 2, name: "John Smith", interest: "Digital marketing service" },
    ];
    setEntries(mockEntries);
  }, []);

  const handleAdCreate = (entry: FormEntry) => {
    alert(`Creating ad for ${entry.name} - ${entry.interest}`);
    // Later, call AI to generate ad.
  };

  return (
    <div className="mt-8 bg-gray-800 text-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">📥 New Form Submissions</h2>
      {entries.map((entry) => (
        <div key={entry.id} className="mb-4 bg-gray-700 p-3 rounded-lg">
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Interest:</strong> {entry.interest}</p>
          <button
            onClick={() => handleAdCreate(entry)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            ✅ Turn into Ad
          </button>
        </div>
      ))}
    </div>
  );
}
