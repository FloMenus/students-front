import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

function StudentsList() {
  const params = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:8000/students");
    const data = await response.json();
    setStudents(data);
  };

  return (
    <div>
      <nav>
        <Link to="/">List</Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>Students List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>{student.name}</p>
          </li>
        ))}
      </ul>
      <Link to={`/form`}>Add Student</Link>
    </div>
  );
}

export default StudentsList;
