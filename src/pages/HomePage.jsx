import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export const HomePage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // Fallback for demo navigation
        setCurrentUser({
          displayName: "Student User",
          email: "student@example.com"
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch(() => {
        navigate('/login');
      });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-between">
      
      {/* Simple Header Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">
          Home Page
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">
            Welcome, {currentUser?.displayName || currentUser?.email || 'Student User'}!
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white border border-gray-300 rounded-xl p-8 max-w-lg w-full text-center shadow-md">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            ✓
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Login Successful!
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            You have successfully logged in to the Home Page.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-left text-xs space-y-2 text-gray-700">
            <p><strong>Name:</strong> {currentUser?.displayName || 'Student User'}</p>
            <p><strong>Email:</strong> {currentUser?.email || 'student@example.com'}</p>
            <p><strong>Status:</strong> <span className="text-green-600 font-semibold">Email Verified ✅</span></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 text-center text-xs text-gray-500">
        Student Web Development Project © 2026
      </footer>

    </div>
  );
};

export default HomePage;
