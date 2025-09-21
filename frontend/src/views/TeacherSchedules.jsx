// client/src/pages/TeacherSchedules.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Schedules.module.css"; // Reuse same dark theme CSS

const TeacherSchedules = () => {
  const assignments = [
    {
      subject: "Cryptography",
      student: "John Doe",
      title: "Cryptography Assignment 1",
      dueDate: "20 Sep 2024",
    },
    {
      subject: "Design and Analysis of Algorithms",
      student: "Jane Smith",
      title: "DAA Problem Set 2",
      dueDate: "25 Sep 2024",
    },
    {
      subject: "Internet Web Programming",
      student: "Alice Johnson",
      title: "IWP Project Submission",
      dueDate: "10 Oct 2024",
    },
    {
      subject: "Cybersecurity",
      student: "Bob Lee",
      title: "Malware Analysis Assignment",
      dueDate: "15 Oct 2024",
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightSection}>
        {/* Topbar */}
        <div className={styles.topbar}>
          <div className={styles.search}>
            🔍 <input type="text" placeholder="Search assignments..." />
          </div>
          <div className={styles.userid}>
            Kanak Anshika Mithun<br />Teacher ID: 2361001
          </div>
          <div className={styles.avatar}>
            <img
              src="https://th.bing.com/th/id/OIP.pAyRN_lNf6IPukCMXYcRcQHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="User Avatar"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <a href="/teacher-dashboard">Home</a>
          <a href="/teacher-schedules">Assignments</a>
          <a href="/settings">Info</a>
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <h1 className={styles.title}>Assigned Subjects</h1>
          <p className={styles.subtitle}>See which assignments are given to which student</p>

          <div className={styles.schedulesGrid}>
            {assignments.map((assn, index) => (
              <div key={index} className={styles.scheduleCard}>
                <h3>{assn.subject}</h3>
                <p><b>Student:</b> {assn.student}</p>
                <p><b>Assignment:</b> {assn.title}</p>
                <p className={styles.time}><b>Due Date:</b> {assn.dueDate}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherSchedules;
