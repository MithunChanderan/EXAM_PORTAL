// client/src/components/Sidebar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType') || 'student'; // get userType from login

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  const getLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <aside className={styles.sidebar}>
      <h1 className={styles.title}>Exam Portal</h1>

      <nav className={styles.nav}>
        {userType === 'student' ? (
          <>
            <NavLink to="/student-dashboard" className={getLinkClass} end>
              Dashboard
            </NavLink>
            <NavLink to="/exams" className={getLinkClass}>
              Exams
            </NavLink>
            <NavLink to="/schedules" className={getLinkClass}>
              Schedules
            </NavLink>
            <NavLink to="/student-assignments" className={getLinkClass}>
              Assignments
            </NavLink>
            <NavLink to="/settings" className={getLinkClass}>
              Settings
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/teacher-dashboard" className={getLinkClass} end>
              Dashboard
            </NavLink>
            <NavLink to="/teacher-exams" className={getLinkClass}>
              Exams
            </NavLink>
            <NavLink to="/teacher-schedules" className={getLinkClass}>
              Schedules
            </NavLink>
            <NavLink to="/teacher-assignments" className={getLinkClass}>
              Assignments
            </NavLink>
            <NavLink to="/settings" className={getLinkClass}>
              Settings
            </NavLink>
          </>
        )}
      </nav>

      <div className="mt-auto">
        <button onClick={handleLogout} className={styles.logoutButton}>
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
