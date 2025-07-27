export default function HomePage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to TOBI TECH Assistant 👋</h1>
      <p className="text-lg mb-6">
        Your AI-powered content and ad assistant that auto-generates ideas,
        posts to Telegram, reminds you of daily tasks, and manages campaigns.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">📢 Ad Generator</h2>
          <p>Generate platform-specific ads from form submissions or AI ideas.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">🧠 Daily Content Ideas</h2>
          <p>3 daily post ideas tailored for Facebook, Instagram, Twitter, and WhatsApp.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">💬 Chat with Assistant</h2>
          <p>Ask questions, generate posts, or chat with your AI assistant.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">📨 Email Campaigns</h2>
          <p>Create and manage newsletter campaigns from Google Sheet leads.</p>
        </div>
      </div>
    </div>
  );
}
