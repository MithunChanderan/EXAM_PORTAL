// client/src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./Dashboard.module.css";
import LoginPage from "./login";
const Dashboard = () => {
  const subjects = [
    {
      name: "Cryptography",
      img: "https://tse1.mm.bing.net/th/id/OIP.96-tlmalL3p2ftG6LXSNbAHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Learn secure communication and encryption techniques.",
    },
    {
      name: "Design & Analysis of Algorithms",
      img: "https://m.media-amazon.com/images/I/51hmMMuWRDL.jpg",
      desc: "Solve problems efficiently with structured algorithms.",
    },
    {
      name: "Internet Web Programming",
      img: "https://th.bing.com/th/id/OIP.Y2MfLOiSL3RskIZ82Y18YAHaER?w=297&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      desc: "Frontend and backend technologies for the web.",
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
          <a href="/LoginPage">Home</a>
          <a href="/schedules">Contact</a>
          <a href="/settings">Info</a>
        </div>

        {/* Main Content */}
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome back, Kanak!</h1>
          <p className={styles.subtitle}>Here’s your overview for today</p>

          <div className={styles.cardsGrid}>
            {subjects.map((subj, index) => (
              <div key={index} className={styles.card}>
                <img src={subj.img} alt={subj.name} />
                <h3>{subj.name}</h3>
                <p>{subj.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
