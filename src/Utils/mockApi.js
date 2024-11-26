import { users, roles } from '../data/mockData';

export const getUsers = () => users;
export const addUser = (user) => users.push({ id: users.length + 1, ...user });
export const deleteUser = (id) => users.splice(users.findIndex((user) => user.id === id), 1);

export const getRoles = () => roles;
export const addRole = (role) => roles.push({ id: roles.length + 1, ...role });
export const deleteRole = (id) => roles.splice(roles.findIndex((role) => role.id === id), 1);
