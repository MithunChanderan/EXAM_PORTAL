// client/src/pages/StudentAssignments.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./StudentAssignments.module.css";

const StudentAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch("/api/assignments/student", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch((err) => console.error("Error fetching assignments:", err));
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>My Assignments</h1>

        {assignments.length === 0 ? (
          <p className={styles.noAssignments}>No assignments yet 🎉</p>
        ) : (
          <div className={styles.cardsGrid}>
            {assignments.map((a) => (
              <div key={a._id} className={styles.card}>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <p>
                  <b>Deadline:</b>{" "}
                  {a.deadline ? new Date(a.deadline).toLocaleDateString() : "N/A"}
                </p>
                <p className={styles.teacher}>
                  <b>Assigned By:</b> {a.assignedBy?.username || "Unknown"}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentAssignments;
