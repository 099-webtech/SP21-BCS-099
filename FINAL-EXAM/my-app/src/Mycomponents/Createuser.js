import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import user from './User'
function CreateUser() {
  const navigate=useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();
   
    axios.post("http://localhost:3001/createuser", { Name, Email, Age })
      .then(result => {
        console.log(result)
        navigate('/user')
        setName("");
        setEmail("");
        setAge("");
        // Set success message
        setSubmissionMessage("User created  successfully!");
      })
      .catch(err => {
        console.log(err);
        
        setSubmissionMessage("Error creating user Please try again.");
      });
  }

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center creatediv">
        <div className="w-50 bg-white rounded p-3 creatediv">
          <h2>Create User</h2>
          <form onSubmit={Submit}>
            <label>
              Name:
              <input type="text" name="Name" className="inputfld" value={Name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="Email"
                className="inputfld"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                className="inputfld1"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <button type="submit" className="crtbtn">Submit</button>
          </form>
          {submissionMessage && <p>{submissionMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default CreateUser;
