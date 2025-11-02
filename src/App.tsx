import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
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

  const handleSignup = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === 'signup') {
    return <Signup onSignup={handleSignup} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard />;
  }

  return <Home onNavigate={handleNavigate} />;
}

export default App;
