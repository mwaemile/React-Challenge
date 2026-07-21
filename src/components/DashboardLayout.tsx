type DashboardLayoutProps = {
  children: React.ReactNode;
  userName: string;
  onLogout: () => void;
};

export default function DashboardLayout({
  children,
  userName,
  onLogout,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-4 shadow">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Protected Todo App
          </h1>

          <div className="flex items-center gap-4">
            <span>
              Welcome, <strong>{userName}</strong>
            </span>

            <button
              onClick={onLogout}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2026 Protected Todo App. All rights reserved.
      </footer>
    </div>
  );
}