import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import HeroDetail from './pages/HeroDetail';
import SubmitPage from './pages/Submit';

// Layout wrapper component to conditionally render Sidebar
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Hide sidebar on submit page to focus user, or if explicitly desired
  const hideSidebar = location.pathname === '/submit';

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-slate-900">
      <Header />
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {!hideSidebar && <Sidebar />}
        <main className={`flex-1 px-4 sm:px-6 lg:px-8 pt-6 ${!hideSidebar ? 'lg:pl-8' : ''}`}>
          {children}
        </main>
      </div>
       {/* Simple footer */}
       <footer className="border-t border-gray-200 mt-auto bg-white">
        <div className="max-w-[1600px] mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} HeroGrids. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero/:id" element={<HeroDetail />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;