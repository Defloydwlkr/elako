import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './AdminSidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    // Only allow opening with menu button, closing is handled by back button
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
      const content = document.querySelector('.dashboard-content');
      if (content) {
        content.classList.add('sidebar-open');
      }
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    // Remove sidebar-open class from dashboard content
    const content = document.querySelector('.dashboard-content');
    if (content) {
      content.classList.remove('sidebar-open');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const navigationItems = [
    { path: '/dashboard', icon: <DashboardIcon />, label: 'Overview' },
    { path: '/user-management', icon: <InventoryIcon />, label: 'User Management' },
    { path: '/msme-oversight', icon: <ApartmentIcon />, label: 'MSME Oversight' },
    { path: '/platform-analytics', icon: <AnalyticsIcon />, label: 'Platform Analytics' },
    { path: '/settings', icon: <SettingsIcon />, label: 'Settings' }
  ];

  return (
    <>
      {/* Toggle Buttons */}
      <div className="sidebar-toggle">
        {!isSidebarOpen ? (
          <button className="menu-button" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
        ) : (
          <button className="back-button" onClick={closeSidebar}>
            <ArrowBackIcon />
          </button>
        )}
      </div>

      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>
            <AccountCircleIcon className="profile-icon" /> 
            Admin User
          </h2>
          <button className="close-button" onClick={closeSidebar}>
            <CloseIcon />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {[
              { path: '/dashboard', icon: <DashboardIcon className="icon" />, label: 'Overview' },
              { path: '/user-management', icon: <InventoryIcon className="icon" />, label: 'User Management' },
              { path: '/msme-oversight', icon: <ApartmentIcon className="icon" />, label: 'MSME Oversight' },
              { path: '/platform-analytics', icon: <AnalyticsIcon className="icon" />, label: 'Platform Analytics' },
              { path: '/settings', icon: <SettingsIcon className="icon" />, label: 'Settings' }
            ].map((item) => (
              <li 
                key={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => {
                  navigate(item.path);
                  // Don't close sidebar on navigation
                }}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-button">
            <LogoutIcon className="icon" /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;