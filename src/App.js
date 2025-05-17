import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';  
import Notes from './components/notes.js';
import PomodoroTimer from './components/pomodoroTimer.js';
import FinanceTracker from './components/financeTracker.js';
import MyCalendar from './components/calendar.js';
import HabitTracker from './components/habitTracker.js';
import TodoList from './components/todolist.js';
import AnalogClock from './components/clock.js';
import LoginPage from './LoginPage'; // Import login page
import RegisterPage from './RegisterPage'; // Import register page
import { auth } from './firebase'; // Firebase authentication

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state based on login status
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="container text-center">
        
        {/* Navigation Links */}
        {user && ( // Show only if the user is logged in
          <nav>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/notes">Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/clock">Clock</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todolist">To-Do List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calendar">Calendar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/habittracker">Habit Tracker</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pomodoro">Pomodoro Timer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/finance">Finance Tracker</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => auth.signOut()}>Logout</button>
              </li>
            </ul>
          </nav>
        )}

        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Private routes - redirect to login if not authenticated */}
          <Route 
            path="/notes" 
            element={user ? <Notes /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/clock" 
            element={user ? <AnalogClock /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/todolist" 
            element={user ? <TodoList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/calendar" 
            element={user ? <MyCalendar /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/habittracker" 
            element={user ? <HabitTracker /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/pomodoro" 
            element={user ? <PomodoroTimer /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/finance" 
            element={user ? <FinanceTracker /> : <Navigate to="/login" />} 
          />
          
          {/* Home route */}
          <Route 
            path="/" 
            element={
              user ? (
                <div>
                  <h2>Welcome to the Dashboard Home!</h2>
                  <p>Select an option from the menu to get started.</p>
                </div>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
