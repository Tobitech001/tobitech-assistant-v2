import Sidebar from "../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 text-white text-2xl font-bold">
        Welcome to TOBI TECH Assistant 🎉
        <p className="text-sm font-normal mt-2 text-gray-400">
          Your personal AI automation system is loading...
        </p>
      </div>
    </div>
  );
}
