import React, { useState } from 'react';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import PermissionsManager from './PermissionsManager';

const AdminPanel = ({ onLogout, username }) => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
        <h2 className="m-0">Admin Panel</h2>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-3">
            <span className="me-2">
              <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
            </span>
            <span>{username}</span>
          </div>
          <button className="btn btn-danger" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Content Area */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <nav className="sidebar bg-secondary text-white p-3" style={{ minWidth: '250px', height: '100%' }}>
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <button
                className={`btn w-100 text-start ${activeTab === 'users' ? 'btn-primary' : 'btn-secondary text-white'}`}
                onClick={() => setActiveTab('users')}
              >
                User Management
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn w-100 text-start ${activeTab === 'roles' ? 'btn-primary' : 'btn-secondary text-white'}`}
                onClick={() => setActiveTab('roles')}
              >
                Role Management
              </button>
            </li>
            <li className="nav-item mb-3">
              <button
                className={`btn w-100 text-start ${activeTab === 'permissions' ? 'btn-primary' : 'btn-secondary text-white'}`}
                onClick={() => setActiveTab('permissions')}
              >
                Permissions
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="content flex-grow-1 p-4">
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'roles' && <RoleManagement />}
          {activeTab === 'permissions' && <PermissionsManager />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
