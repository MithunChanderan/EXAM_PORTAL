// client/src/pages/Schedules.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Schedules.module.css";

const Schedules = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightSection}>
        {/* Topbar */}
        <div className={styles.topbar}>
          <div className={styles.search}>
            🔍 <input type="text" placeholder="Search schedules..." />
          </div>
          <div className={styles.userid}>
            Kanak Anshika Mithun<br />2361001
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
          <a href="/dashboard">Home</a>
          <a href="/exams">Exams</a>
          <a href="/courses">Courses</a>
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <h1 className={styles.title}>My Schedules</h1>

          <div className={styles.schedulesGrid}>
            <div className={styles.scheduleCard}>
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.96-tlmalL3p2ftG6LXSNbAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Cryptography"
              />
              <h3>Cryptography</h3>
              <p className={styles.time}>20 Sep 2024 — 9:00 AM to 11:00 AM</p>
            </div>

            <div className={styles.scheduleCard}>
              <img
                src="https://m.media-amazon.com/images/I/51hmMMuWRDL.jpg"
                alt="DAA"
              />
              <h3>Design and Analysis of Algorithms</h3>
              <p className={styles.time}>25 Sep 2024 — 1:00 PM to 3:00 PM</p>
            </div>

            <div className={styles.scheduleCard}>
              <img
                src="https://th.bing.com/th/id/OIP.Y2MfLOiSL3RskIZ82Y18YAHaER?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                alt="IWP"
              />
              <h3>Internet Web Programming</h3>
              <p className={styles.time}>10 Oct 2024 — 10:00 AM to 12:00 PM</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Schedules;
