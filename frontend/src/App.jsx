// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Exams from './pages/Exams';
import TeacherExams from './pages/TeacherExams';
import CourseDetails from './pages/CourseDetails';
import Settings from './pages/Settings';
import Schedules from './pages/Schedules';
import TeacherSchedules from './pages/TeacherSchedules';
import TeacherAssignments from './pages/TeacherAssignments';
import StudentAssignments from './pages/StudentAssignments';
// Protect routes with role-based access
const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  if (!token) return <Navigate to="/login" />;

  if (role && userType !== role) {
    // Redirect to correct dashboard if wrong role
    return <Navigate to={userType === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'} />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-gray-300 font-sans">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Student Routes */}
          <Route
            path="/student-dashboard"
            element={
              <PrivateRoute role="student">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/exams"
            element={
              <PrivateRoute role="student">
                <Exams />
              </PrivateRoute>
            }
          />
          <Route
            path="/schedules"
            element={
              <PrivateRoute role="student">
                <Schedules />
              </PrivateRoute>
            }
          />
<Route
  path="/student-assignments"
  element={
    <PrivateRoute role="student">
      <StudentAssignments />
    </PrivateRoute>
  }
/>


          {/* Teacher Routes */}
          <Route
            path="/teacher-dashboard"
            element={
              <PrivateRoute role="teacher">
                <TeacherDashboard />
              </PrivateRoute>
            }
          />
         <Route path="/teacher-assignments" element={<PrivateRoute role="teacher"><TeacherAssignments /></PrivateRoute>} />

          <Route
            path="/teacher-exams"
            element={
              <PrivateRoute role="teacher">
                <TeacherExams />
              </PrivateRoute>
            }
          />
          <Route
            path="/teacher-schedules"
            element={
              <PrivateRoute role="teacher">
                <TeacherSchedules />
              </PrivateRoute>
            }
          />
          <Route path="/teacher-assignments"
      element={
    <PrivateRoute role="teacher">
      <TeacherAssignments />
    </PrivateRoute>
  }
/>


          {/* Common Routes */}
          <Route
            path="/course/:courseId"
            element={
              <PrivateRoute>
                <CourseDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
