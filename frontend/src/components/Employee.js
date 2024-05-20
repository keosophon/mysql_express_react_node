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
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded ">
        <Link className="btn btn-success m-2" to="/Create">
          Add +
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    className="btn btn-primary"
                    to={`/update/employee/${item.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => handleDelete(e, item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
