import { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div className="container">
      <h1>🎓 Student Management System</h1>

      <AddStudent
        refresh={refresh}
        setRefresh={setRefresh}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />

      <StudentList
        refresh={refresh}
        setRefresh={setRefresh}
        setEditStudent={setEditStudent}
      />
    </div>
  );
}

export default App;