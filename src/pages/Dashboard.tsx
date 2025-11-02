function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8">
          Dashboard
        </h1>
        <p className="text-center text-gray-600 text-lg">
          Welcome to your Task Manager Dashboard
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
