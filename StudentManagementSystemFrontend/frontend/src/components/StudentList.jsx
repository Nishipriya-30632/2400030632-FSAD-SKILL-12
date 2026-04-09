import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/students";

function StudentList({ refresh, setRefresh, setEditStudent }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    setRefresh(!refresh);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>
              <button onClick={() => setEditStudent(s)}>Edit</button>
              <button onClick={() => handleDelete(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;