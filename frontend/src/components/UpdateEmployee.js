import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/update/employee/" + id, { userName, email })
      .then(navigate("/"))
      .catch((error) => console.error("Error", error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">User Name:</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
