import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEmployee() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/create", { userName, email })
      .then(navigate("/"))
      .catch((error) => console.error("Error", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
