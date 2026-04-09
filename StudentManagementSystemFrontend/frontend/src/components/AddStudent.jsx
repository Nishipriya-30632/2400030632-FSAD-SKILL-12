import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:8080/students";

function AddStudent({ refresh, setRefresh, editStudent, setEditStudent }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editStudent) {
        await axios.put(`${API}/${editStudent.id}`, form);
        setEditStudent(null);
      } else {
        await axios.post(API, form);
      }

      setForm({ name: "", email: "", course: "" });
      setRefresh(!refresh);

    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <input
        placeholder="Course"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
        required
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default AddStudent;