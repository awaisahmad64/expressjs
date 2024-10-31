// Importing necessary modules and CSS
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './showusers.css';

// Defining the ShowUsers Component
function ShowUsers({ refreshTrigger, setRefresh }) {

  // State for form data and user list
  const [data, setData] = useState({ name: '', password: '', role: '' });
  const [userList, setUserList] = useState([]);
  const [editId, setEditId] = useState(null);

  // Function to handle form data changes
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to submit form data (create or update user)
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const response = await axios.put(`/api/user/${editId}`, data);
        console.log('Update Response:', response.data);
        setEditId(null);
      } else {
        const response = await axios.post('/api/user', data);
        console.log('Response from server:', response.data);
      }
      setRefresh((prev) => !prev);
      setData({ name: '', password: '', role: '' });
    } catch (err) {
      console.error('Request failed:', err);
    }
  };

  // Function to fetch data from the server
  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080/api/user');
    setUserList(response.data);
  };

  // Function to delete a user
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      setUserList(userList.filter((user) => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Function to prepare the form for updating a user
  const updateHandler = (id) => {
    const userToUpdate = userList.find((user) => user._id === id);
    if (userToUpdate) {
      setData({
        name: userToUpdate.name,
        password: userToUpdate.password,
        role: userToUpdate.role,
      });
      setEditId(id);
    }
  };

  // Fetch data on component mount and when refreshTrigger changes
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (refreshTrigger) {
      fetchData();
      setRefresh(false);
    }
  }, [refreshTrigger, setRefresh]);

  // Rendering the form and user list
  return (
    <div>
      <form style={{ paddingTop: '100px' }} onSubmit={submitHandle}>
        <div>
          <label htmlFor="userName"> User Name </label>
          <input
            type="text"
            id="userName"
            name="name"
            value={data.name}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="userPassword"> Password  </label>
          <input
            type="password"
            id="userPassword"
            name="password"
            value={data.password}
            onChange={changeHandle}
          />
        </div>
        <div>
          <label htmlFor="userRole"> User Role (admin/user)  </label>
          <input
            type="text"
            id="userRole"
            name="role"
            value={data.role}
            onChange={changeHandle}
          />
        </div>
        <button type="submit">{editId ? 'Update' : 'Submit'}</button>
      </form>

      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>User Names</th>
            <th>Passwords</th>
            <th>User Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>
                <button id='btn-delete' onClick={() => deleteHandler(user._id)}>Delete</button>
                <button id='btn-update' onClick={() => updateHandler(user._id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUsers;
