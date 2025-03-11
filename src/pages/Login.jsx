import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Predefined admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@ootytours.com",
  password: "admin123",
  name: "Admin",
  isAdmin: true
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Initialize admin credentials if not already set
  useEffect(() => {
    if (!localStorage.getItem("adminInitialized")) {
      localStorage.setItem("adminUser", JSON.stringify(ADMIN_CREDENTIALS));
      localStorage.setItem("adminInitialized", "true");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if this is an admin login
    const adminUser = JSON.parse(localStorage.getItem("adminUser"));
    if (email === adminUser.email && password === adminUser.password) {
      localStorage.setItem("user", JSON.stringify(adminUser));
      alert("Admin login successful!");
      navigate("/admin");
      return;
    }

    // Regular user login (existing functionality)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="w-full max-w-md">
        {/* Happy Stay Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Happy Stay</h1>
          <div className="h-1 w-32 bg-white mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">Sign in to your Ooty Tours account</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password"
                placeholder="Enter your password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 shadow-md"
            >
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
          
          {/* <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
            <p className="text-sm text-gray-700 font-medium mb-1">Admin Access:</p>
            <p className="text-sm text-gray-600">Email: admin@ootytours.com</p>
            <p className="text-sm text-gray-600">Password: admin123</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;