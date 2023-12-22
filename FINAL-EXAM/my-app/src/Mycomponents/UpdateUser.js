import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import User from "./User";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Age: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/getuser/${id}`)
      .then(result => {
        const { Name, Email, Age } = result.data;
        setUserData({ Name, Email, Age });
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/updateuser/${id}`, userData)
      .then(result => {
        console.log(result);
        navigate('/User');
        
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center creatediv">
        <div className="w-50 bg-white rounded p-3 creatediv">
          <h2>Update User</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Name:
              <input
                type="text"
                name="Name"
                className="inputfld"
                value={userData.Name}
                onChange={(e) => setUserData({ ...userData, Name: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                className="inputfld"
                value={userData.Email}
                onChange={(e) => setUserData({ ...userData, Email: e.target.value })}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                className="inputfld1"
                value={userData.Age}
                onChange={(e) => setUserData({ ...userData, Age: e.target.value })}
              />
            </label>
            <button type="submit" className="crtbtn">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
