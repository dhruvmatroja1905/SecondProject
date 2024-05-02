import React, { Suspense, lazy } from 'react';
import './App.css';
import './index.css';
import Admin from './Component/Admin';
import Authentication from './Component/Authentication';
import Project from './Component/Project';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Pages/Profile';
import TryForm from './Component/tryForm';
import Register from './Pages/Register';
import SignInOutContainer from './Container/index'
import Dashboard from './Component/Dashboard';
import Inquiry from './Component/Inquiry';
import Payment from './Component/Payment';

// Lazy load AllUsers component
const AllUsers = lazy(() => import('./AllUsers'));

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inquiry" element={<Inquiry/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/authentication" element={<TryForm />} />
          {/* Wrap the Route with Suspense and provide a fallback */}

          <Route
            path="/profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AllUsers />
              </Suspense>
            }
          />

          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
