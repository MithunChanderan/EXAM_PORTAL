// client/src/pages/TeacherExams.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Exams.module.css"; // reuse same dark theme CSS

const TeacherExams = () => {
  // Example data: only exams where this teacher is the invigilator
  const exams = [
    {
      subject: "Cryptography",
      examName: "Cryptography Exam 1",
      students: [
        { name: "John Doe", status: "Completed", score: 92, result: "Passed" },
        { name: "Jane Smith", status: "Not Written", score: "-", result: "-" },
        { name: "Alice Johnson", status: "Completed", score: 88, result: "Passed" },
      ],
    },
    {
      subject: "Design & Analysis of Algorithms",
      examName: "DAA Exam 1",
      students: [
        { name: "John Doe", status: "Completed", score: 85, result: "Passed" },
        { name: "Jane Smith", status: "Completed", score: 78, result: "Passed" },
        { name: "Bob Lee", status: "Not Written", score: "-", result: "-" },
      ],
    },
    {
      subject: "Internet Web Programming",
      examName: "IWP Exam 1",
      students: [
        { name: "Alice Johnson", status: "Completed", score: 55, result: "Failed" },
        { name: "Bob Lee", status: "Not Written", score: "-", result: "-" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>Exam Oversight</h1>
        <p className={styles.subtitle}>Check which students have completed exams under your supervision</p>

        {exams.map((exam, idx) => (
          <div key={idx} className={styles.results}>
            <h2 className={styles.resultsTitle}>
              {exam.examName} — {exam.subject}
            </h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Completion Status</th>
                  <th>Score</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {exam.students.map((student, sIdx) => (
                  <tr key={sIdx}>
                    <td>{student.name}</td>
                    <td>{student.status}</td>
                    <td>{student.score}</td>
                    <td>{student.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TeacherExams;
