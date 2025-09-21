// client/src/pages/TeacherDashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "./TeacherDashboard.module.css"; // Dark theme styles

const TeacherDashboard = () => {
  const [assignments, setAssignments] = useState([
    {
      title: "Cryptography Assignment 1",
      subject: "Cryptography",
      desc: "Solve the encryption exercises.",
    },
    {
      title: "AI Project Proposal",
      subject: "Artificial Intelligence",
      desc: "Submit your project proposal.",
    },
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    subject: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    setNewAssignment({ ...newAssignment, [e.target.name]: e.target.value });
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.subject && newAssignment.desc) {
      setAssignments([...assignments, newAssignment]);
      setNewAssignment({ title: "", subject: "", desc: "" });
    }
  };

  // Subjects with images
  const subjects = [
    {
      name: "Cryptography",
      img: "https://img.icons8.com/?size=100&id=23263&format=png&color=FFFFFF",
    },
    {
      name: "Design & Analysis of Algorithms",
      img: "https://img.icons8.com/?size=100&id=8300&format=png&color=FFFFFF",
    },
    {
      name: "Internet Web Programming",
      img: "https://img.icons8.com/?size=100&id=20909&format=png&color=FFFFFF",
    },
    {
      name: "Cybersecurity",
      img: "https://img.icons8.com/?size=100&id=104191&format=png&color=FFFFFF",
    },
    {
      name: "Database Management Systems",
      img: "https://img.icons8.com/?size=100&id=39913&format=png&color=FFFFFF",
    },
    {
      name: "Artificial Intelligence",
      img: "https://img.icons8.com/?size=100&id=122786&format=png&color=FFFFFF",
    },
    {
      name: "Operating Systems",
      img: "https://img.icons8.com/?size=100&id=59961&format=png&color=FFFFFF",
    },
    {
      name: "Software Engineering",
      img: "https://img.icons8.com/?size=100&id=23238&format=png&color=FFFFFF",
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightSection}>
        {/* Topbar */}
        <div className={styles.topbar}>
          <div className={styles.search}>
            🔍 <input type="text" placeholder="Search dashboard..." />
          </div>
          <div className={styles.userid}>
            <br />Teacher ID: 2361001
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
          <a href="/LoginPage">Home</a>
          <a href="/schedules">Contact</a>
          <a href="/settings">Info</a>
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome back, Instructor!</h1>
          <p className={styles.subtitle}>Manage your subjects and assignments</p>

          {/* Subjects Section */}
          <div className={styles.cardsGrid}>
            {subjects.map((subj, index) => (
              <div key={index} className={styles.card}>
                <img src={subj.img} alt={subj.name} className={styles.cardImg} />
                <h3>{subj.name}</h3>
                <p>Manage lessons and assignments for {subj.name}.</p>
              </div>
            ))}
          </div>

          {/* Assignments Section */}
          <section className={styles.assignmentSection}>
            <h2>Post a New Assignment</h2>
            <form className={styles.assignmentForm} onSubmit={handleAddAssignment}>
              <input
                type="text"
                name="title"
                placeholder="Assignment Title"
                value={newAssignment.title}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <select
                name="subject"
                value={newAssignment.subject}
                onChange={handleInputChange}
                className={styles.input}
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((subj, idx) => (
                  <option key={idx} value={subj.name}>
                    {subj.name}
                  </option>
                ))}
              </select>
              <textarea
                name="desc"
                placeholder="Assignment Description"
                value={newAssignment.desc}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Post Assignment
              </button>
            </form>

            <h2>Existing Assignments</h2>
            <div className={styles.cardsGrid}>
              {assignments.map((assn, index) => (
                <div key={index} className={styles.card}>
                  <h3>{assn.title}</h3>
                  <p>
                    <b>Subject:</b> {assn.subject}
                  </p>
                  <p>{assn.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
