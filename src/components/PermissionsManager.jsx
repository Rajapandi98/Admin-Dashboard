import React, { useState } from 'react';

const PermissionsManager = () => {
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']);
  const [newPermission, setNewPermission] = useState('');

  const handleAddPermission = () => {
    setPermissions([...permissions, newPermission]);
    setNewPermission('');
  };

  return (
    <div>
      <h2>Permissions Management</h2>
      <ul className="list-group mb-3">
        {permissions.map((permission, index) => (
          <li className="list-group-item" key={index}>
            {permission}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New Permission"
          className="form-control mb-2"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddPermission}>
          Add Permission
        </button>
      </div>
    </div>
  );
};

export default PermissionsManager;
