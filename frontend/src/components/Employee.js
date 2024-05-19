import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:" + error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    try {
      await axios.delete("http://localhost:8000/student/" + id);
      window.location.reload();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <h1>Employee</h1>
      <table>
        <thead>
          <Link to="/Create">Add</Link>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <Link to={`/update/employee/${item.id}`}>Update</Link>
              <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
