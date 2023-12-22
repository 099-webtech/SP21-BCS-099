import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function User() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const navigateToCreateuser = () => {
    navigate('/createuser');
  };

  const navigateToUpdateuser = (userId) => {
    navigate(`/updateuser/${userId}`);
  };

  const handleDelete = (userId) => {
    console.log("Deleting user with ID:", userId);
  
    axios.delete(`http://localhost:3001/deleteuser/${userId}`)
      .then(result => {
        console.log(result);
        // Refresh the user list or perform any other action as needed
        axios.get('http://localhost:3001')
          .then(result => setUsers(result.data))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
  

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center maindiv">
      <div className="w-50 bg-white rounded p-3">
        <button onClick={navigateToCreateuser}>Create++</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.Email}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Age}</td>
                <td>
                  <button onClick={() => navigateToUpdateuser(user._id)}>Edit</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
