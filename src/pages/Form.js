import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    let navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const params = useParams();

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await fetch("http://localhost:8000/students");
    const data = await response.json();
    setStudents(data);
  };

  const postStudent = async (e) => {
    e.preventDefault();

    const student = { name: e.target.children[0].value} ;

    const request = await fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        student,
      ),
    });
    const response = await request.json();
    navigate(`../success/${student.name}`, { replace: true });
  };

  return (
    <div>
      <nav>
        <Link to="/">List</Link>
        <Link to="/form">Form</Link>
      </nav>
      <h1>Form</h1>
      <form onSubmit={postStudent}>
        <input type="text" placeholder="Name" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
