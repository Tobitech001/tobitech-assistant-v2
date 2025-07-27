export default function EmailPage() {
  return (
    <div className="p-6 text-white space-y-6">
      <h1 className="text-3xl font-bold">📧 Email Campaigns</h1>
      <p className="text-gray-300">
        Plan, track, and launch your AI-powered email campaigns. This feature will automatically pull content from Google Sheets and help you send emails to your subscribers.
      </p>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-white mb-2">📅 Scheduled Emails</h2>
        <p className="text-gray-400 mb-4">
          You'll see a list of all scheduled emails here once connected.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Welcome Email to New Subscribers</li>
          <li>Daily Tips & Tricks Broadcast</li>
          <li>Weekly Product Highlights</li>
        </ul>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-white mb-2">🛠️ Coming Soon</h2>
        <p className="text-gray-400">
          This page will soon support:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Live Google Sheets integration</li>
          <li>Email preview and testing</li>
          <li>AI-powered subject line suggestions</li>
          <li>One-click send to Mailchimp or Gmail</li>
        </ul>
      </div>
    </div>
  );
}
