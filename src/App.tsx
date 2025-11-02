import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

type Page = 'home' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard />;
  }

  return <Home onNavigate={handleNavigate} />;
}

export default App;
