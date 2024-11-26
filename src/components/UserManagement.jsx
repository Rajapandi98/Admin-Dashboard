import React, { useState } from 'react';
import { getUsers, addUser, updateUser, deleteUser } from '../Utils/mockApi';

const UserManagement = () => {
  const [users, setUsers] = useState(getUsers());
  const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    addUser(newUser);
    setUsers(getUsers());
    setNewUser({ name: '', role: '', status: 'Active' });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
    setUsers(getUsers());
  };

  return (
    <div>
      <h2>User Management</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="form-control mb-2"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <select
          className="form-select mb-2"
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button className="btn btn-primary" onClick={handleAddUser}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserManagement;
