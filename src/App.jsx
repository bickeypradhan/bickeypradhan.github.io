import { useState, useEffect } from 'react';
import TopNavbar from './components/TopNavbar';
import BottomNav from './components/BottomNav';
import TerminalMode from './components/TerminalMode';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light';
  });
  const [showTerminal, setShowTerminal] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Page transition animation
  const navigateTo = (page) => {
    if (page === currentPage) return;
    setPageVisible(false);
    setTimeout(() => {
      setCurrentPage(page);
      setPageVisible(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'skills': return <SkillsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <>
      {/* Background layers */}
      <div className="dotted-bg" />
      <div className="glow-blob glow-blob--top-left" />
      <div className="glow-blob glow-blob--bottom-right" />
      <div className="glow-blob glow-blob--top-right" />

      {/* Top Navbar */}
      <TopNavbar
        theme={theme}
        setTheme={setTheme}
        onTerminalToggle={() => setShowTerminal(!showTerminal)}
      />

      {/* Page Content with transition */}
      <div
        style={{
          opacity: pageVisible ? 1 : 0,
          transform: pageVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage={currentPage} setCurrentPage={navigateTo} />

      {/* Terminal Mode Overlay */}
      {showTerminal && (
        <TerminalMode onClose={() => setShowTerminal(false)} />
      )}
    </>
  );
}

export default App;
