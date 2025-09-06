import React from 'react';
import AdminSidebar from './AdminSidebar';
import './MSMEDashboard.css';
import { IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import useSidebarState from '../hooks/useSidebarState';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const MSMEDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen } = useSidebarState();

  const handleNavigation = (path) => {
    navigate(path);
    // Don't close sidebar on navigation
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="msme-profile">
          <div className="profile-image">M</div>
          <div className="profile-info">
            <h3>Maria's MSME</h3>
            <p>MSME Business</p>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
                        <li 
                className="active" 
                onClick={() => handleNavigation('/msme-dashboard')}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <li onClick={() => handleNavigation('/msme-products')}>
              <InventoryIcon className="icon" />
              <span>Manage Products</span>
            </li>
            <li onClick={() => handleNavigation('/msme-analytics')}>
              <AnalyticsIcon className="icon" />
              <span>Growth & Analytics</span>
            </li>
            <li onClick={() => handleNavigation('/msme-messages')}>
              <EmailIcon className="icon" />
              <span>Messages</span>
            </li>
            <li onClick={() => handleNavigation('/msme-profile')}>
              <PersonIcon className="icon" />
              <span>Profile</span>
            </li>
          </ul>
        </nav>

        <button className="logout-button">
          <LogoutIcon className="icon" />
          <span>Logout</span>
        </button>
      </div>

      <div className="main-content">
        <div className="header">
          <div>
            <h1>Welcome back, Maria's MSME!</h1>
            <p>Here's what's happening with your business today.</p>
          </div>
          <button className="customize-button">Customize Dashboard</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>PAGE VIEWS</h3>
            <div className="stat-value">2,847</div>
            <div className="stat-trend positive">+8% from last month</div>
          </div>
          <div className="stat-card">
            <h3>AVERAGE RATING</h3>
            <div className="stat-value">4.8</div>
            <div className="stat-subtext">Based on 151 reviews</div>
          </div>
          <div className="stat-card">
            <h3>NEW CUSTOMERS</h3>
            <div className="stat-value">124</div>
            <div className="stat-trend positive">+15% this week</div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="products-section">
            <h2>Top Products by Rating</h2>
            <div className="products-list">
              <div className="product-item">
                <span className="rank">#1</span>
                <span className="name">Buko Pie</span>
                <span className="rating">4.9</span>
              </div>
              <div className="product-item">
                <span className="rank">#2</span>
                <span className="name">Coffee Beans</span>
                <span className="rating">4.8</span>
              </div>
              <div className="product-item">
                <span className="rank">#3</span>
                <span className="name">Shakshuka Breakfast</span>
                <span className="rating">4.7</span>
              </div>
              <div className="product-item">
                <span className="rank">#4</span>
                <span className="name">Banana Chips</span>
                <span className="rating">4.6</span>
              </div>
            </div>
          </div>

          <div className="insights-section">
            <h2>Business Insights</h2>
            <div className="insight-cards">
              <div className="insight-card">
                <h4>Peak Customer Engagement</h4>
                <p>Most customer interactions occur between 2-4 PM</p>
              </div>
              <div className="insight-card">
                <h4>Growth Opportunity</h4>
                <p>Consider adding more coffee varieties to boost sales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn add-product">
              <AddCircleOutlineIcon /> Add Product
            </button>
            <button className="action-btn view-messages">
              <MailOutlineIcon /> View Messages
            </button>
            <button className="action-btn check-analytics">
              <AssessmentIcon /> Check Analytics
            </button>
            <button className="action-btn settings">
              <SettingsIcon /> Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSMEDashboard;
