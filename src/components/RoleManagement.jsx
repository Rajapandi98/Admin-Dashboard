import React, { useState } from 'react';
import { getRoles, addRole, deleteRole } from '../Utils/mockApi';

const RoleManagement = () => {
  const [roles, setRoles] = useState(getRoles());
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const handleAddRole = () => {
    addRole(newRole);
    setRoles(getRoles());
    setNewRole({ name: '', permissions: [] });
  };

  return (
    <div>
      <h2>Role Management</h2>
      <ul className="list-group mb-3">
        {roles.map((role) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={role.id}>
            {role.name}
            <button className="btn btn-danger btn-sm" onClick={() => deleteRole(role.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Role</h3>
        <input
          type="text"
          placeholder="Role Name"
          className="form-control mb-2"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddRole}>
          Add Role
        </button>
      </div>
    </div>
  );
};

export default RoleManagement;
