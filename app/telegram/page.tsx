export default function TelegramPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">📢 Telegram Posts</h1>
      <p className="mb-6">
        Here you can view, manage, and auto-post your messages to your Telegram channel and profile.
      </p>

      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">📄 Upcoming Posts</h2>
        <p>This section will soon show messages pulled from your Google Sheet automation.</p>
        <p className="text-sm text-gray-400 mt-2">Live integration is coming next.</p>
      </div>
    </div>
  );
}
