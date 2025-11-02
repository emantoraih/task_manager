function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center px-4">
      <div className="text-center space-y-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          Welcome to My Task Manager
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
          <button className="w-64 py-4 px-8 bg-white text-blue-600 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Login
          </button>

          <button className="w-64 py-4 px-8 bg-white text-blue-600 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Signup
          </button>

          <button className="w-64 py-4 px-8 bg-white text-blue-600 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
