// client/src/pages/CourseDetails.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";

const CourseDetails = () => {
  const { courseId } = useParams();

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.title}>Course Details</h1>
        <p className={styles.subtitle}>
          Showing details for course ID:{" "}
          <span className={styles.courseId}>{courseId}</span>
        </p>
        {/* We'll fetch and display real course data here later */}
      </main>
    </div>
  );
};

export default CourseDetails;
