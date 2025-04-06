// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './Pages/First';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home1 from './Pages/Home1';
import Home2 from './Pages/Home2';
import Profile from './Pages/Profile';

// import the context api
import { UserProvider , useUser } from './Pages/UserContext';
import Testing from './Components/Testing';

function ProtectedRoute({ children }) {
  const { user } = useUser();
  return user ? children : <Navigate to="/login" />;
}


function App() {
  return (
    <UserProvider>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        

        <Route path="/home2" element={<ProtectedRoute><Home2 /></ProtectedRoute>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/testing" element={<Testing />} />

      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
