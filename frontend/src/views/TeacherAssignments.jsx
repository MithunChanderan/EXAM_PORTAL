// client/src/pages/TeacherAssignments.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./TeacherAssignments.module.css";

const TeacherAssignments = () => {
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({
    studentId: "",
    title: "",
    description: "",
    deadline: ""
  });

  // Fetch students on mount
  useEffect(() => {
    fetch("/api/users/students", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  // Fetch teacher’s assignments on mount
  useEffect(() => {
    fetch("/api/assignments/teacher", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch((err) => console.error("Error fetching assignments:", err));
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle assignment creation
  const handleAssign = async (e) => {
    e.preventDefault();
    if (!form.studentId || !form.title || !form.deadline) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        setAssignments([...assignments, data]);
        setForm({ studentId: "", title: "", description: "", deadline: "" });
      } else {
        alert(data.error || "Failed to assign task");
      }
    } catch (err) {
      console.error("Error posting assignment:", err);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>Assign Tasks to Students</h1>

        {/* Assignment Form */}
        <form className={styles.form} onSubmit={handleAssign}>
          <label>Select Student</label>
          <select
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Student --</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>
                {s.username} ({s.email})
              </option>
            ))}
          </select>

          <label>Assignment Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
          />

          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            required
          />

          <button type="submit">Assign Task</button>
        </form>

        {/* Display Assigned Tasks */}
        <h2 className={styles.subtitle}>Assigned Tasks</h2>
        <div className={styles.list}>
          {assignments.map((a) => (
            <div key={a._id} className={styles.assignmentCard}>
              <div>
                <p className={styles.assignmentTitle}>{a.title}</p>
                <p className={styles.assignmentDesc}>{a.description}</p>
                <p className={styles.assignmentMeta}>
                  Assigned to: {a.assignedTo?.username || "Unknown"}
                </p>
              </div>
              <p className={styles.assignmentDeadline}>
                Deadline: {new Date(a.deadline).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeacherAssignments;
