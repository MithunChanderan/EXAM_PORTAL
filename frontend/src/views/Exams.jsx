// client/src/pages/Exams.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Exams.module.css";

const Exams = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>My Exams</h1>

        {/* Exam Cards Section */}
        <div className={styles.exams}>
          <div className={styles.examCard}>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.96-tlmalL3p2ftG6LXSNbAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Cryptography"
            />
            <p className={styles.subject}>Cryptography</p>
            <p className={styles.date}>20 Sep 2024, 9:00 AM</p>
          </div>

          <div className={styles.examCard}>
            <img
              src="https://m.media-amazon.com/images/I/51hmMMuWRDL.jpg"
              alt="DAA"
            />
            <p className={styles.subject}>Design and Analysis of Algorithms</p>
            <p className={styles.date}>25 Sep 2024, 11:00 AM</p>
          </div>

          <div className={styles.examCard}>
            <img
              src="https://th.bing.com/th/id/OIP.Y2MfLOiSL3RskIZ82Y18YAHaER?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt="Internet Web Programming"
            />
            <p className={styles.subject}>Internet Web Programming</p>
            <p className={styles.date}>10 Oct 2024, 10:00 AM</p>
          </div>
        </div>

        {/* Results Table Section */}
        <div className={styles.results}>
          <h2 className={styles.resultsTitle}>Exam Results</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Exam</th>
                <th>Completion Status</th>
                <th>Score</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Design Analysis & Algorithm Exam 1</td>
                <td>Completed</td>
                <td>85</td>
                <td>Passed</td>
              </tr>
              <tr>
                <td>Cryptography Exam 1</td>
                <td>Completed</td>
                <td>92</td>
                <td>Passed</td>
              </tr>
              <tr>
                <td>Internet Web Programming Exam 1</td>
                <td>Partially Completed</td>
                <td>55</td>
                <td>Failed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Exams;
